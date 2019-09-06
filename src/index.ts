
/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */
// const express = require('express')
import * as express from 'express';
import * as bodyParser from 'body-parser';
const Router = express.Router()
// import router from './router'
// api路由中间件
const apiList = require('./apiList/index')
const app = express()
const port = process.env.PORT || 3456

app.use('/node_modules/', express.static('../node_modules/'))
app.use('/public/', express.static('../public/'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// app.set('views', '../views')

app.use((req, res, next) => {
    // 防跨域问题
    res.set('Access-Control-Allow-Origin', '*')
    next()
})
/* 挂载路由 */
app.use(apiList(Router))
// app.use(router)

/* 监听端口启动服务 */
app.listen(port, ()=>{
  
  console.log(`Example app listening on http://127.0.0.1:${port}`)
})

