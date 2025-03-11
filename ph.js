let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    console.log(JSON.stringify(obj));  // 添加这行来输出 JSON 结构
    if (obj && obj.data) {
      let originalName = obj.data.song_name || "";
      let customSinger = "胖虎";
      obj.data.song_name = originalName + " - " + customSinger;
      obj.data.song_singer = "胖虎yyds";
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";
      obj.data.source = "网易云音乐";  // 尝试添加来源
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
