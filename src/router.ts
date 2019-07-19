/*
 * @Author: alkun
 * @Date:   2019-07-18 23:06:48
 * @Last Modified by:   alkun
 * @Last Modified time: 2019-07-19 12:23:10
 */

'use strict';
import * as express from 'express';

const router = express.Router()
// const axios = require('axios')
const request = require('./utils/request')
const apiList = require('./apiList/index')

let apiHost = 'http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006'

router
    .get('/', async (req, res, next) => {
        console.log(req.query)
        // 分类页
        // axios.defaults.headers['Origin'] =  '*'
        let resp = await request({
            type: 'get',
            url: '/cms_list_tag/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006',
            // data: req.query
        })
        res.send(resp.data)
    
    })
    .get('/cms_list_tag', async (req, res, next) => {
        console.log(req.query)
        // 分类页
        // axios.defaults.headers['Origin'] =  '*'
        let resp = await request({
            type: 'get',
            url: '/cms_list_tag/cms_list_tag?nid=23831003&type=2006&pageNo=0&pageSize=10',
            // data: req.query
        })
        // resp.data.hahah="hahahah"
        res.send(resp.data)
       
    })
    // /category/fuzzy-search?&limit=50&alias=ns_xuanhuan&packageName=com.ifmoc.ZhuiShuShenQi&sort=1&start=0
    .get('/playlist_bycolumnid_tag', async (req, res, next) => {
        // 分类页
        // axios.defaults.headers['Origin'] =  '*'
        
        // let resp = await axios.post(apiHost,{
        //     data: '{"cityId":872,"longitude":121.47,"latitude":31.23,"pageIndex":1,"pageSize":"16","utdidh5":"","userId":null,"loginKeyH5":"","cna":"LNhFFZXd0iwCAXTpWqZK59/z","recType":1,"option":2,"projectIdList":"[177450,596848165372,597423628490,598006634275,590672276119,175066,598034512523,598410993723,597419209377,175056,588766299013,590032608300,597844585765,589887083080,598917982143,598717233087]"}'
        // })
        let resp = await request({
            type: 'get',
            url: '/playlist_bycolumnid_tag?playListType=2&type=1&columnId=15127315&tagId=&startIndex=0'
        })
        res.send(resp.data)
       
    })
    //转发 post 请求
    // .post('/', function(req, res, next){
    //     var path = req.originalUrl;
    //     var content = req.body;
    //     _fn.postData(path, content, function(data){
    //         res.send(data);
    //     })
    // })
    
export default router
