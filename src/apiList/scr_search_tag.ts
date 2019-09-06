/**
 * @todo: 搜索结果列表
 * @api: scr_search_tag
 * ?rows=20&type=2&keyword=%25E5%2591%25A8%25E6%259D%25B0%25E4%25BC%25A6&pgc=1
 * @param {} rows
 * @param {} type
 * @param {} keyword
 * @param {} pgc
 */
module.exports = (app) => {
    app.get('/scr_search_tag', async (req, res) => {
        try {
            let result = await app.request({
                url: 'scr_search_tag',
                data: {
                    ...req.query
                }
            })
            res.send(result.data)
        } catch (err) {
            res.send({ code: -100, msg: err.message })
        }
        
    })
}