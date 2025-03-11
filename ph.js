let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";

      // 获取自定义歌手名，优先使用运行参数，其次使用持久化存储，没有则使用默认值
      let customSinger = (typeof $argument !== 'undefined' && $argument.customSinger) 
                         ? $argument.customSinger 
                         : ($persistentStore.read("customSinger") || "胖虎yyds");
      
      // 可根据需要修改歌手展示逻辑，这里示例保留原始歌手信息到song_name中
      obj.data.song_name = originalName + "-" + originalSinger;
      obj.data.song_singer = customSinger;
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
