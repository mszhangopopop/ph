let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      // 获取原始歌曲名
      let originalName = obj.data.song_name || "";
      // 定义自定义歌手
      let customSinger = "胖虎";
      // 修改歌曲名为“原始歌曲名 - 自定义歌手”
      obj.data.song_name = originalName + " - " + customSinger;
      // 修改歌手名
      obj.data.song_singer = "胖虎yyds";
      // 修改封面链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";
      // 添加来源信息（字段名可能需根据实际 JSON 结构调整）
      obj.data.source = "网易云音乐";
    }
    // 返回修改后的 JSON 数据
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
