const getVerify = require('./api/get-verify')
const login = require('./api/login')
const register = require('./api/register')
const updateWechatInfo = require('./api/update-wechat-info')
const getTaskList = require('./api/get-task-list')
const getMyInfoTaskList = require('./api/get-my-info-task-list')
const {
    randomString,
    randomName,
    randomCookie,
    randomPhone,
    randomIPHeader,
    randomDate,
    normalizeName,
    randomCSRF,
    randomFirstName,
    randomeBankNumber,
    randomUserAgent,
    randomIntegerAsString,
} = require('./helper/random')
const receiveTask = require('./api/receive-task')
const finishMyTask = require('./api/finish-my-task')

require('./helper/createFolder')('data')

let invitationCode

setImmediate(async () => {
    while (true) {
        try {
            let response

            const cookie = `__cfduid=da698018d874c0588719945f9b77eebef1610892077`

            const validCode = '15nq'

            const checkKey = 1610899999658

            const phone = randomPhone()

            console.log({ phone, })

            response = await register(cookie, phone, validCode, invitationCode)

            const { en_msg, success, status } = response

            const { token } = response.data

            console.log({ en_msg, token })

            response = await login(cookie, phone, validCode, checkKey)

            require('fs').appendFileSync('./data/accounts.txt', phone + '\n', () => { })

            const { token: verifiedToken, userId: myRefferalCode } = response.data

            console.log({ verifiedToken, myRefferalCode })

            invitationCode = myRefferalCode

            response = await updateWechatInfo(cookie, verifiedToken, phone)

            console.log(response)

            response = await getTaskList(cookie, verifiedToken)

            const { records } = response.data

            const taskIDArray = records
                .filter(task => {
                    if (task && task.taskId && task.remainNum && parseInt(task.remainNum, 10) > 0)
                        return true
                    else
                        return false
                })
                .map(task => task.taskId)

            console.log(taskIDArray)

            for (let i = 0; i < 8; i++) {
                response = await receiveTask(cookie, verifiedToken, taskIDArray[i])

                console.log(response)
            }

            response = await getMyInfoTaskList(cookie, verifiedToken)

            const { records: myTaskList } = response.data

            const taskOrderArray = myTaskList.map(order => order.id)

            console.log(taskOrderArray)

            for (let i = 0; i < taskOrderArray.length; i++) {
                response = await finishMyTask(cookie, verifiedToken, taskOrderArray[i], phone)

                console.log(response)
            }
        } catch (error) {
            console.log(error)

            process.exit()
        }
    }
})