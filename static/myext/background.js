chrome.runtime.sendMessage(
  { type: "FROM_EXTENSION", message: "Hello from extension!" },
  function (response) {
    console.log(response); // 打印来自主进程的消息
  }
);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    alert(JSON.stringify(request))
  if (request.type === "FROM_MAIN") {
    console.log(request.message); // 打印来自主进程的消息
    sendResponse({
      type: "FROM_EXTENSION",
      message: "Received message from main process!"
    });
  } else if (request.type === "FROM_CONTENT") {
    chrome.runtime.sendMessage(
      { type: "FROM_EXTENSION", message: "Hello from content script!" },
      function (response) {
        console.log(response); // 打印来自主进程的消息
      }
    );
  }
});
