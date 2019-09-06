# miguMusic-api
node + ts 实现转发咪咕音乐api
http://m.music.migu.cn/v3
## 使用教程
```js
    $ git clone https://github.com/bigzjk/miguMusic-api.git
    $ yarn || npm install
    $ npm run nodedev
可在浏览器输入http://127.0.0.1:3456/client_play_list_tag ,查看是否跑成功；
```
## 已转发成功的apiList
- 首页
    + banner(轮播)：`cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006`
    + 推荐歌单：`client_play_list_tag`
    + 新碟上架：`cms_list_tag?pageSize=10&nid=23854016&pageNo=0&type=2003`
    + 音乐活动：`cms_list_tag?pageSize=10&nid=25068352&pageNo=0&type=2006`
- 歌单
    + 精选：`playlist_bycolumnid_tag?playListType=2&type=1&columnId=15127315&tagId=&startIndex=0`
- 现场
    + 演唱会现场：`cms_list_tag?pageSize=10&nid=23886093&pageNo=0&type=2006`
- 排行榜
    + banner：`cms_list_tag?nid=23603695&type=2011&pageNo=0&pageSize=1`
    + 咪咕官方榜：`cms_list_tag?nid=23603721&pageSize=3&pageNo=0`
- 详情
    + 详情顶部banner信息 `playlist_query_tag?onLine=1&queryChannel=0&createUserId=221acca8-9179-4ba7-ac3f-2b0fdffed356&contentCountMin=5&playListId=148171731`
- 搜索
    + 搜索联想关键字`autocomplete_tag?keyword=zhou`
    + 搜索结果列表：`scr_search_tag?rows=20&type=2&keyword=%25E5%2591%25A8%25E6%259D%25B0%25E4%25BC%25A6`
    
