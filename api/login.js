const axios = require('axios')

module.exports = async (cookie, phone, captcha, checkKey, password = 'c34660aa83babe459832cdaaf770fe55') => {
    const headers = {
        'authority': 'www.e-money0.com',
        'accept': 'application/json, text/plain, */*',
        'x-access-token': 'null',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://www.e-money0.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.e-money0.com/',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie
    }

    const data = {
        'username': '84' + phone,
        'password': password,
        'captcha': captcha,
        'checkKey': checkKey
    }

    const options = {
        url: 'https://www.e-money0.com/aidianzan/clienth5/member/login',
        method: 'POST'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, data })

    return response.data
}
