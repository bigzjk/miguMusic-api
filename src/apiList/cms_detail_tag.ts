/**
 * @todo 歌单
 * @api /cms_detail_tag
 * @param {string} nid
 * @param {string} type
 * ?playListType=2&type=1&columnId=15127315&tagId=&startIndex=0
 */
module.exports = (app) => {
    app.get('/cms_detail_tag', async (req, res) => {
        try {
            console.log(req.query)
            let result = await app.request({
                // url: "/playlist_bycolumnid_tag",
                // ?nid=23831003&type=2006&pageNo=0&pageSize=10
                url: "cms_detail_tag",
                ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
                data: { 
                    ...req.query,
                }
            })
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
    })
}
