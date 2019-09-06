const axios = require('axios')
const { userAgent } = require('./userAgent')

// Lib a.d.ts
interface IParamsInfo {
    method: string,
    baseURL: string,
    url: string,
    // params: IParams,
    headers: any,
    data?: any,
    params?: any,
}

module.exports = (opt: any) =>{
    let paramsInfo:IParamsInfo = {
        baseURL: 'http://m.music.migu.cn/migu/remoting/',
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
