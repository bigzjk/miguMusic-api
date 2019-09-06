/**
 * @todo 搜索词联想推荐
 * @api autocomplete_tag
 * @param {string} keyword 搜索关键字
 */
module.exports = (app) => {
    app.get('/autocomplete_tag', async (req, res) => {
        try {
            // {   onLine: '1',
            //     queryChannel: '0',
            //     createUserId: '221acca8-9179-4ba7-ac3f-2b0fdffed356',
            //     contentCountMin: '5',
            //     playListId: '148171731' 
            // }
            const result = await app.request({
                url: 'autocomplete_tag',
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