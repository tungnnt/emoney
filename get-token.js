const fs = require('fs')
    , es = require('event-stream')
const ACCOUNTS_FILE = './data/accounts.txt'
const ERROR_FILE = './data/errors.txt'
const getVerify = require('./api/get-verify')
const login = require('./api/login')
const register = require('./api/register')
const updateWechatInfo = require('./api/update-wechat-info')
const getTaskList = require('./api/get-task-list')
const getMyInfoTaskList = require('./api/get-my-info-task-list')
const getNewComerRewards = require('./api/get-new-comer-rewards')
const getUserInput = require('./helper/getUserInput')

const newComerRewardTaskID = ['1317361350923853826', '1317361469819789314', '1317361545615056897', '1317361649658961922']

let isIgnore = true

setImmediate(async () => {
    const s = fs.createReadStream(ACCOUNTS_FILE)
        .pipe(es.split())
        .pipe(es.mapSync(async line => {
            s.pause()

            try {
                let response

                const cookie = `__cfduid=d6879802d18e9950d4cd9552f89f8f6271610813109`

                const validCode = '2xi1'

                const checkKey = 1610976229679

                const phone = line.trim()

                console.log({ phone, })

                response = await login(cookie, phone, validCode, checkKey)

                const { token: verifiedToken, userId: myRefferalCode } = response.data

                console.log({ verifiedToken })

                require('fs').appendFileSync('./data/tokens.txt', `${phone}|${verifiedToken}\n`, () => { })

                s.resume()
            } catch (e) {
                fs.appendFile(ERROR_FILE, JSON.stringify({ err: e, data: line }) + '\n', () => { })

                s.resume()
            }
        }).on('error', function (err) {

        }).on('end', function () {

        }))
})