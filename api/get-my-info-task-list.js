const axios = require('axios')

module.exports = async (cookie, token) => {
    const headers = {
        'authority': 'www.e-money0.com',
        'content-length': '0',
        'accept': 'application/json, text/plain, */*',
        'x-access-token': token,
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'origin': 'https://www.e-money0.com',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.e-money0.com/',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': cookie
    }

    const options = {
        url: 'https://www.e-money0.com/aidianzan/clienth5/myInfo/getMyInfoTaskList?pageNo=1&pageSize=50&status=1',
        method: 'POST'
    }

    const response = await axios({ method: options.method || 'GET', url: options.url, headers, })
    
    return response.data
}
