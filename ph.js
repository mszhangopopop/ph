let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      let originalName = obj.data.song_name || "";
      let source = obj.data.source || "未知来源"; // 获取转发来源，若无则显示"未知来源"
      let customSinger = "自定义歌手"; // 这里修改为你想要的自定义歌手
      
      obj.data.song_name = originalName + "-" + customSinger + " [" + source + "]";
      // 将歌手改为固定文本
      obj.data.song_singer = "胖虎yyds";
      // 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
