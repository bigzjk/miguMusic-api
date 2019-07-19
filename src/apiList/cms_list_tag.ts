// import request from '../utils/request'
const request = require('../utils/request')

module.exports = (app) => {
    app.get('/cms_list_tag', async (req, res) => {
        try {
            let result = await request({
                // url: "/cms_list_tag",
                // ?nid=23831003&type=2006&pageNo=0&pageSize=10
                url: "cms_list_tag",
                data: { 
                    nid: req.query.nid,
                    type: req.query.type
                }
            })
            // console.log(result.data)
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}
