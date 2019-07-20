# miguMusic-api
node实现转发咪咕音乐api

## apiList
- 首页
    + banner(轮播)：cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006
    + 推荐歌单：client_play_list_tag
    + 新碟上架：cms_list_tag?pageSize=10&nid=23854016&pageNo=0&type=2003
    + 音乐活动：cms_list_tag?pageSize=10&nid=25068352&pageNo=0&type=2006
- 歌单
    + 精选：playlist_bycolumnid_tag?playListType=2&type=1&columnId=15127315&tagId=&startIndex=0
- 现场
    + 演唱会现场：cms_list_tag?pageSize=10&nid=23886093&pageNo=0&type=2006
- 排行榜
    + banner：cms_list_tag?nid=23603695&type=2011&pageNo=0&pageSize=1
    + 咪咕官方榜：cms_list_tag?nid=23603721&pageSize=3&pageNo=0