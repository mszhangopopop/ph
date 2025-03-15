let body = $response.body;
let headers = $response.headers;

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj && obj.data) {
      const songCombination = {
        song_name: "恭喜发财,大吉大利！",
        song_singer: "领取红包",
        cover: "http://q4.qlogo.cn/headimg_dl?dst_uin=1107621373&spec=640"
      };

      let originalName = obj.data.song_name || "";
      let customSinger = "胖虎"; // 修改为想要的自定义歌手
      obj.data.song_name = songCombination.song_name; // 歌曲名
      obj.data.name = songCombination.song_singer;    // 歌手名
      obj.data.song_singer = "胖虎yyds";             // 歌手名
      obj.data.cover = songCombination.cover;         // 封面

      obj.data.song_name = originalName ? originalName + " - " + customSinger : songCombination.song_name;

      let updatedBody = JSON.stringify(obj);
      $done({ body: updatedBody, headers: headers });
    } else {
      $done({ body: body, headers: headers });
    }
  } catch (e) {
    console.log("解析失败", e);
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}
