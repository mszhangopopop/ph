let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      let originalName = obj.data.song_name || "";
      let customSinger = "自定义歌手"; // 这里修改为你想要的自定义歌手
      let source = obj.data.source || "网易云音乐"; // 这里设置转发来源
      
      // 修改歌名格式
      obj.data.song_name = originalName + "-" + customSinger;
      
      // 修改歌手为固定文本
      obj.data.song_singer = "胖虎yyds";
      
      // 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";
      
      // 让转发来源显示在卡片底部
      obj.data.source = source; // 如果有 `source` 字段，则修改它
      obj.data.platform = source; // 可能 `platform` 字段才是显示来源的，试着加上
      
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
