/**
 * @todo 歌单
 * @api /playlist_bycolumnid_tag
 * @param {string} nid
 * @param {string} type
 * ?playListType=2&type=1&columnId=15127315&tagId=&startIndex=0
 */
module.exports = (app) => {
    app.get('/playlist_bycolumnid_tag', async (req, res) => {
        try {
            let result = await app.request({
                // url: "/playlist_bycolumnid_tag",
                // ?nid=23831003&type=2006&pageNo=0&pageSize=10
                url: "playlist_bycolumnid_tag",
                data: { 
                    columnId: req.query.columnId,
                    playListType: req.query.playListType
                }
            })
            // console.log(result.data)
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}
