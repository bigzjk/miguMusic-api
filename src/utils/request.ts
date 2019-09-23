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

const request = (paramInfo: any) => {
    function getDataFn(obj) {
        let getData: IParamsInfo = {
            url: obj.url,
            method: obj.method ||'get',
            baseURL: 'http://m.music.migu.cn/migu/remoting/',
            headers: {
                'User-Agent': obj.ua || userAgent(),
            }
        }
        if (getData.method == 'get'){
            getData.params = obj.data
        } else {
            getData.data = obj.data
        }
        return getData
    }
    
    if(!Array.isArray(paramInfo)){
        return axios(getDataFn(paramInfo))
    } else {
        let fetchArray = paramInfo.map(v => {
            return axios(getDataFn(v))
        })
        return new Promise((resolve, reject) => {
            axios.all(fetchArray).then()

            axios.all(fetchArray)
            .then(axios.spread(function (...arg) {
                // 多个请求现在都执行完成
                resolve(arg)
            })).catch(err => {
                console.log(err)
            })
        })

    }
}

module.exports = request
