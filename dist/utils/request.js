var axios = require('axios');
var userAgent = require('./userAgent').userAgent;
module.exports = function (opt) {
    var paramsInfo = {
        baseURL: 'http://m.music.migu.cn/migu/remoting/',
        method: opt.type || 'get',
        url: opt.url,
        headers: {
            'User-Agent': userAgent(),
        }
    };
    if (paramsInfo.method == 'get') {
        paramsInfo.params = opt.data;
    }
    else {
        paramsInfo.data = opt.data;
    }
    return axios(paramsInfo);
};
