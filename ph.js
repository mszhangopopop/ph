let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      // 获取原始歌曲名和歌手名，若不存在则默认为空字符串
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
      
      // 合并歌曲名和歌手名为新的歌曲名
      obj.data.song_name = originalName + "-" + originalSinger;
      
      // 使用$argument获取自定义歌手名，若未提供则默认为“胖虎yyds”
      let customSinger = $argument || "胖虎yyds";
      obj.data.song_singer = customSinger;
      
      // 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";
    }
    // 返回修改后的JSON字符串
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
