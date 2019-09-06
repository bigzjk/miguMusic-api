/**
 * @todo 详情页列表模块
 * @api /client_play_list_tag
 * @param {string} niplayListIdd
 * @param {string} playListType
 * @param {string} contentCount
 */
module.exports = (app) => {
    app.get('/playlistcontents_query_tag', async (req, res) => {
        try {
            let result = await app.request({
                url: "playlistcontents_query_tag",
                data: { 
                    // playListId: req.query.playListId,
                    // playListType: req.query.playListType,
                    // contentCount: req.query.contentCount,
                    ...req.query
                }
            })
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}
