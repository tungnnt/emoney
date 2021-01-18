const axios = require('axios')

const newComerRewardTaskID = ['1317361350923853826', '1317361469819789314', '1317361545615056897', '1317361649658961922']

module.exports = async (cookie, token, taskId) => {
    const headers = {
        'authority': 'www.e-money0.com',
        'accept': 'application/json, text/plain, */*',
        'x-access-token': token,
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.e-money0.com/',
        'accept-language': 'en-US,en;q=0.9,vi;q=0.8,zh-CN;q=0.7,zh;q=0.6',
        'cookie': cookie
    }

    const options = {
        url: 'https://www.e-money0.com/aidianzan/clienth5/home/getNewcomerRewards?id=' + taskId
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, })

    return response.data
}
