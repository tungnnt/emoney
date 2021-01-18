const axios = require('axios')

module.exports = async (cookie, phone, validCode, invitationCode = '202110365', password = 'c34660aa83babe459832cdaaf770fe55') => {
    const headers = {
        'authority': 'e-money01.com',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'content-type': 'application/json;charset=UTF-8',
        'origin': 'https://e-money01.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://e-money01.com/registPage/?invitationCode=' + invitationCode,
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie
    }

    const data = {
        'account': '84' + phone,
        'password': password,
        'valideCode': validCode,
        'deviceType': '2',
        'nickName': '',
        'invitationCode': invitationCode
    }

    const options = {
        url: 'https://e-money01.com/aidianzan/clienth5/member/register',
        method: 'POST'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, data })
        .catch(error => console.log(error))

    return response.data
}
