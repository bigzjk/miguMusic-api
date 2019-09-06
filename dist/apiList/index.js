"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var request = require('../utils/request');
// 查找出多有的页面名
var routes = fs.readdirSync(__dirname).filter(function (item) { return item.indexOf('index') != 0; });
module.exports = function (router) {
    // 将请求放到每个实例中
    router.request = request;
    routes.forEach(function (item) {
        var routeFn = require(path.resolve(__dirname, item));
        routeFn(router);
    });
    return router;
};
