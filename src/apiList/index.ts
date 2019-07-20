import * as fs from 'fs'

import * as path from 'path'
const request = require('../utils/request')
// 查找出多有的页面名
const routes = fs.readdirSync(__dirname).filter(item => item.indexOf('index') != 0)
module.exports = (router) => {
    router.request = request
    routes.forEach((item) => {
        let routeFn = require(path.resolve(__dirname, item))
        routeFn(router)
    })
    return router
}