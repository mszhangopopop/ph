let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      
      let originalName = obj.data.song_name || "";
      let customSinger = "自定义歌手"; // 这里修改为你想要的自定义歌手
      let source = "网易云音乐"; // 这里设置转发来源
      
      // 修改歌名格式
      obj.data.song_name = originalName + "-" + customSinger;
      
      // 修改歌手为固定文本
      obj.data.song_singer = "胖虎yyds";
      
      // 修改封面为指定链接
      obj.data.cover = "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640";

      // **直接设置可能的来源字段**
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

      // **尝试嵌套 source_info 结构**
      obj.data.source_info = {
        source_name: source, // 可能的来源名称字段
        source_type: "音乐平台", // 可能需要的类型
        source_icon: "https://q1.qlogo.cn/g?b=qq&nk=2734843508&s=640" // 可能需要来源图标
      };

      // **尝试嵌套 repost_info 结构**
      obj.data.repost_info = {
        repost_from: source, 
        repost_platform: source
      };

      // **尝试嵌套 origin_info 结构**
      obj.data.origin_info = {
        origin_name: source,
        origin_platform: source
      };

    }
    console.log("修改后的 JSON 数据:", JSON.stringify(obj)); // 输出 JSON 方便调试
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败:", e);
    $done({body});
  }
} else {
  $done({});
}
