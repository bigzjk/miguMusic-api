const axios = require('axios')
const { userAgent } = require('./userAgent')
module.exports = (opt) =>{
    let paramsInfo = {
        baseURL: 'http://m.music.migu.cn/migu/remoting',
        method: opt.type || 'get',
        url: opt.url,
        headers: {
            'User-Agent': userAgent(),
            // 'Access-Control-Allow-Origin': '*'
        }
    }
    if (paramsInfo.method == 'get'){
        paramsInfo.params = opt.data
    } else {
        paramsInfo.data = opt.data
    }
    
    return axios(paramsInfo)
}
