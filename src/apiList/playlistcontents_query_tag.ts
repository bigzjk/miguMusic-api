/**
 * @todo 推荐歌单首页推荐模块
 * @api /client_play_list_tag
 * @param {string} nid
 * @param {string} type
 */
module.exports = (app) => {
    app.get('/playlistcontents_query_tag', async (req, res) => {
        try {
            let result = await app.request({
                url: "playlistcontents_query_tag",
                data: { 
                    playListId: req.query.playListId,
                    playListType: req.query.playListType,
                    contentCount: req.query.contentCount,
                }
            })
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}
