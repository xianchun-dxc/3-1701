const $ = require("jquery");
const { ipcRenderer } = require("electron");

ipcRenderer.send("extension-message", "Hello from render process!");
ipcRenderer.on("main-message", (event, arg) => {
  console.log(arg); // 打印来自主进程的消息
});

$(document).ready(function () {
  $("#gpt").click(() => {
    $.get("http://127.0.0.1:8884/message_from_gpt")
    $("webview").attr(
      "src",
      "https://www.7b3.cn/wp-content/plugins/wp-chatgpt/frontend/index.html?nonce=b437260f23#/chat/22636"
    );
  });
  $("#meeting").click(() => {
    $.get("http://127.0.0.1:8884/message_from_meeting")
    $("webview").attr("src", "https://www.bing.com");
  });
  $("#badmine").click(() => {
    $.get("http://127.0.0.1:8884/message_from_badmine")
    $("webview").attr("src", "https://www.baidu.com");
  });
  $("#exit").click(() => {
    ipcRenderer.send("load-url", "exit");
  });
  $("#minWindow").click(() => {
    $(".left").hide();
    $(".minMenu").css("display", "flex");
  });
  $("#maxWindow").click(() => {
    $(".left").show();
    $(".minMenu").hide();
  });
});
