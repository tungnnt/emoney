const axios = require('axios')

module.exports = async (cookie, invitationCode = '202110365') => {
    const headers = {
        'authority': 'e-money01.com',
        'accept': '*/*',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'x-requested-with': 'XMLHttpRequest',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://e-money01.com/registPage/?invitationCode=' + invitationCode,
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie
    }

    const options = {
        url: 'https://e-money01.com/aidianzan/clienth5/getVerify'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, })

    return response.data
}
