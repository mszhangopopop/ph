let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
      
      // 允许自定义歌曲名称
      let customName = "自定义歌曲"; // 这里修改为你想要的自定义名称
      
      obj.data.song_name = (customName || originalName) + "-" + originalSinger;
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
