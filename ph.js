let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      let originalName = obj.data.song_name || "";
      
      // 自定义歌手名称
      let customSinger = "胖虎yyds";

      // 修改歌名（不修改原始名称，只修改歌手）
      obj.data.song_name = originalName;
      obj.data.song_singer = customSinger;

      // 修改封面
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";

      // 添加来源信息
      obj.data.source_info = {
        "source_name": "网易云音乐",  // 微信卡片下方的来源
        "source_icon": "https://y.music.126.net/favicon.ico" // 来源图标
      };
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
