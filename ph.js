let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      let originalName = obj.data.song_name || "";
      let originalSinger = obj.data.song_singer || "";
      
      // 获取自定义歌手名称，优先使用 $argument 传参，其次使用持久化存储，没有则默认"胖虎yyds"
      let customSinger = ($argument && $argument.trim() !== "") 
                          ? $argument.trim() 
                          : ($persistentStore.read("customSinger") || "胖虎yyds");
      
      // 如有需要，可自定义 song_name 拼接逻辑
      obj.data.song_name = originalName + "-" + originalSinger;
      // 修改歌手名称为自定义值
      obj.data.song_singer = customSinger;
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
