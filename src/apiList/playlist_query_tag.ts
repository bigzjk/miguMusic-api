/**
 * @todo 详情页顶部banner
 * @api playlist_query_tag
 * @param {string} playListId
 * @param {string} onLine 是否线上
 * @param {string} queryChannel 创建渠道 
 * @param {string} createUserId 创建渠道者id 
 * @param {string} contentCountMin 最小数量 
 */
module.exports = (app) => {
    app.get('/playlist_query_tag', async (req, res) => {
        try {
            // {   onLine: '1',
            //     queryChannel: '0',
            //     createUserId: '221acca8-9179-4ba7-ac3f-2b0fdffed356',
            //     contentCountMin: '5',
            //     playListId: '148171731' 
            // }
            const result = await app.request({
                url: 'playlist_query_tag',
                data: {
                    ...req.query
                }
            })
            res.send(result.data)
        } catch (error) {
            res.send({ code: -100, msg: error.message })
        }
       
    })
}