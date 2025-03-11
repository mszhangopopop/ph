let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      let originalName = obj.data.song_name || "";
      let customSinger = "胖虎"; // 修改为您想要的自定义歌手
      // 将来源信息附加到歌曲名
      obj.data.song_name = originalName + " - " + customSinger + " (来源: 网易云音乐)";
      // 修改歌手名
      obj.data.song_singer = "胖虎yyds";
      // 修改封面链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";
      // 尝试设置description字段（尽管可能不显示）
      obj.data.description = "来源: 网易云音乐";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
