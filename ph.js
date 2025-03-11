let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      // 原始歌曲名称
      let originalName = obj.data.song_name || "";
      // 自定义歌手
      let customSinger = "自定义歌手"; // 这里修改为你想要的自定义歌手
      // 希望在卡片底部显示的来源
      let source = "网易云音乐"; // 这里可改成你想显示的来源

      // 1. 修改歌曲名：原歌曲名 - 自定义歌手
      obj.data.song_name = originalName + "-" + customSinger;

      // 2. 将歌手改为固定文本
      obj.data.song_singer = "胖虎yyds";

      // 3. 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";

      // 4. 尝试设置多个可能的来源字段
      obj.data.source = source;
      obj.data.platform = source;
      obj.data.origin = source;
      obj.data.forward_source = source;
      obj.data.forward_platform = source;
      obj.data.transmit_from = source;
      obj.data.repost_from = source;
      obj.data.display_source = source;
      obj.data.share_source = source;
      obj.data.post_source = source;
      obj.data.relay_from = source;

      // 5. 尝试嵌套常见的“信息对象”，有些平台会用这种结构
      obj.data.source_info = {
        source_name: source,
        source_icon: "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640" // 来源图标
      };
      obj.data.repost_info = {
        repost_from: source,
        repost_platform: source
      };
      obj.data.origin_info = {
        origin_name: source,
        origin_platform: source
      };
    }
    // 打印修改后的 JSON，便于抓包或调试查看
    console.log("修改后的 JSON 数据:", JSON.stringify(obj));
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
