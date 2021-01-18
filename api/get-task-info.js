const axios = require('axios')

module.exports = async () => {
    const headers = {
        'authority': 'www.e-money0.com',
        'accept': 'application/json, text/plain, */*',
        'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTA4NjY4MDUsInVzZXJuYW1lIjoiODQyNDA3MjExMjIifQ.mfScxs6MvJ0Xe6jMDy6tqZKnNfm5xc-yILTJdE2yh9A',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://www.e-money0.com/',
        'accept-language': 'en-US,en;q=0.9',
        'cookie': '__cfduid=dafb6a86d525fc3b673cd1caa09fda2741610861904; _ga=GA1.1.1792783545.1610887117; gadsTest=test; __gads=ID=84d96ca8ae80a62e-22e0bd87bdc50024:T=1610861921:RT=1610861921:S=ALNI_MYKoQAbeEl5KZsizvKTcSd_Ie-Eaw; _ga_MXV0GLB3X8=GS1.1.1610889459.2.1.1610890211.0',
        'content-length': '0',
        'origin': 'https://www.e-money0.com',
        'Accept': '*/*',
        'Referer': 'https://www.e-money0.com/',
        'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTA4NjY4MDUsInVzZXJuYW1lIjoiODQyNDA3MjExMjIifQ.mfScxs6MvJ0Xe6jMDy6tqZKnNfm5xc-yILTJdE2yh9A',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
        'Content-Type': 'image/jpeg',
        'content-type': 'application/x-www-form-urlencoded',
        'if-none-match': '"6002f805-43f24"',
        'if-modified-since': 'Sat, 16 Jan 2021 14:28:21 GMT',
        'Connection': 'keep-alive',
        'Access-Control-Request-Method': 'PUT',
        'Access-Control-Request-Headers': 'authorization,content-type,x-oss-date,x-oss-user-agent',
        'Origin': 'https://www.e-money0.com',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'en-US,en;q=0.9',
        'Content-Length': '0',
        'x-oss-user-agent': 'aliyun-sdk-js/6.11.2 Safari 13.0.3 on Apple iPhone (iOS 13.2.3)',
        'authorization': 'OSS LTAI4GJV5Jqgr4vGVDSYPnwy:Ojz/UC7d4cxlOUhVG04XL7MjuQI=',
        'x-oss-date': 'Sun, 17 Jan 2021 06:52:49 GMT'
    }

    const data = `$'\u0089PNG\r\n\u001a\n\u0000\u0000\u0000\rIHDR\u0000\u0000\u0010\u0084\u0000\u0000\u000fô\u0008\u0006\u0000\u0000\u0000\u0002Ø:D\u0000\u0000\u0000\u0009pHYs\u0000\u0000=\u0084\u0000\u0000=\u0084\u0001Õ¬¯t\u0000\u0000 \u0000IDATx^ìÜ¬_wy\u001fð·\u0003+öµÖ\u0014b¯\u008bñ\rB\u008e"\u0012M\u000e°%`·sH\u0098h±²¡å\u0007ô\u001a\u009c®\u0088`³\u0086hùa\u0012;(\u0015Yc\'ä\u0097Úd«\u008d[ÑÅà+H\u009c©[å\u0096\u001f%\u008b\u0099lHÖB­-¡Q,\u0086¯ç\u0000q\u0094f\u0093¯M[âéÒ{ÓÓ\u008bí{}ü=ç{Îù¾,õ\u008fØçó|\u009eçõ|þ¨|Í{Nü"@\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080@÷\u0005ÎIòÎ$\u0017&yK\u00927\'ùÇI~.ÉÜÉñ\u008f&ùË$ßOòÝ$ßIòçI¾\u0091d÷\u0089LH\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080@\u0093\u0004æ4©\u0019½\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @ \u0087\u0002+\u0092¼/É{\u0093\u009c\u009au\u009fIòGIþ É®Ó¬å8\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004f\u0014\u0010\u00081#\u0091\u000f\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010h\u0091À\u0099I>\u009aä×z\u0010\u0002q¢±\'Â\u0021>\u009bä3I^n\u0091\u008dV\u0009\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010h\u0091\u0080@\u0088\u0016-K«\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u0010 @\u0080\u0000\u0001\u0002\u0004\u0008\u009cP`"\u0008â\u0013InH2¯&§#I\u001eHòiÁ\u00105\u0089»\u0086\u0000\u0001\u0002\u0004\u0008\u0010`
    const options = {
        url: 'https://www.e-money0.com/aidianzan/clienth5/task/getTaskInfo',
        method: 'POST'
    }

    const response = await axios({method: options.method || 'GET', url: options.url, headers, data})
    return response.data
}
