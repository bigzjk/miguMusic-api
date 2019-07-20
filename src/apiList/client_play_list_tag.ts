// import request from '../utils/request'
/**
 * @todo 推荐歌单首页推荐模块
 * @api /client_play_list_tag
 * @param {}
 */
module.exports = (app) => {
    app.get('/client_play_list_tag', async (req, res) => {
        try {
            let result = await app.request({
                // url: "/client_play_list_tag",
                // ?nid=23831003&type=2006&pageNo=0&pageSize=10
                url: "client_play_list_tag",
                data: {}
            })
            // console.log(result.data)
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}
