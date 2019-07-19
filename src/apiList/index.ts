import * as fs from 'fs'

import * as path from 'path'

const routes = fs.readdirSync(__dirname).filter(item => item.indexOf('index') != 0)
module.exports = (router) => {
    routes.forEach((item) => {
        let routeFn = require(path.resolve(__dirname, item))
        routeFn(router)
    })
    return router
}