const { app, session, BrowserWindow, ipcMain, screen } = require("electron");
const express = require("express");
const path = require("path");
const ElectronStore = require("electron-store");
const store = new ElectronStore();
const mobileAgent =
  "Mozilla/5.0 (Linux; Android 10; Pixel 3 Build/QP1A.191005.007.A3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.116 Mobile Safari/537.36";

let yiyanWindow;
let kimiWindow;
let zhipuWindow;
let tongyiWindow;
let mainWindow;
let bottomWindow;
let firstLoad = true;
function startHttpServer() {
  if (!firstLoad) {
    return;
  }
  firstLoad = false;

  // 创建 Express 服务器
  const app = express();
  const PORT = 8884;
  // 设置静态文件目录（存放图片）
  app.use(express.static(path.join(__dirname, "")));

  // 启动服务器
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // 监听 app-quit 事件，在事件处理函数中关闭 HTTP 服务
  app.on("app-quit", () => {
    server.close();
  });
}

function initWidth(modelNum) {
  store.set("modelNum", modelNum);
  const windowWidth = Math.floor(
    (mainWindow.getBounds().width - 5 * (modelNum + 1)) / modelNum
  );
  yiyanWindow.setBounds({
    x: mainWindow.getBounds().x + 5,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
  if (modelNum < 2) {
    return;
  }
  kimiWindow.setBounds({
    x: mainWindow.getBounds().x + windowWidth + 10,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
  if (modelNum < 3) {
    return;
  }
  zhipuWindow.setBounds({
    x: mainWindow.getBounds().x + windowWidth * 2 + 15,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
  if (modelNum < 4) {
    return;
  }
  tongyiWindow.setBounds({
    x: mainWindow.getBounds().x + windowWidth * 3 + 20,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
}

function createWindow() {
  const modelNum = store.get("modelNum") || 4;
  const primaryDisplay = screen.getPrimaryDisplay();
  const windowWidth = Math.floor(
    (primaryDisplay.size.width - 5 * (modelNum + 1)) / modelNum
  );
  const windowHeight = primaryDisplay.size.height;
  session.defaultSession
    .loadExtension(path.join(__dirname, "myext"))
    .then(() => {
      startHttpServer();

      if (store.get("isLogin")) {
        session.defaultSession.webRequest.onBeforeRequest(
          (details, callback) => {
            const url = details.url.toLocaleLowerCase();
            if (
              url.includes("acs-") ||
              url.includes("static/eb/js/index") || // baidu
              url.includes("static/eb/js/vendors") || // baidu
              url.includes("static/eb/css/index") || // baidu
              url.includes("static/eb/css/vendors") || // baidu
              url.includes("https://g.alicdn.com/tongyi/qianwen") || // tongyi
              url.includes("https://g.alicdn.com/sd/baxia-entry") || // tongyi
              url.includes("moonshot.cn/kimi-chat") || // kimi
              url.includes("https://chatglm.cn/js/") || // chatglm
              url.includes("https://chatglm.cn/css/") || // chatglm
              url.includes("https://chatglm.cn/jmlink.js") || // chatglm
              url.includes("https://chatglm.cn/sensorsdata.min.js") || // chatglm
              url.includes("https://chatglm.cn/sat-props-patch/index.js") || // chatglm
              url.includes("https://sfile.chatglm.cn/js/vue2/") || // chatglm
              url.includes("https://static.tiangong.cn/wwwsite/") // tiangong
            ) {
              callback({ cancel: true });
            } else {
              callback({});
            }
          }
        );
      }

      mainWindow = new BrowserWindow({
        frame: false,
        width: primaryDisplay.size.width,
        height: windowHeight,
        autoHideMenuBar: true,
        movable: false,
        resizable: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1",
          devTools: true
        }
      });
      mainWindow.loadFile("./menu.html");

      yiyanWindow = new BrowserWindow({
        x: mainWindow.getBounds().x + 5,
        y: mainWindow.getBounds().y + 32,
        frame: false,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90,
        autoHideMenuBar: true,
        parent: mainWindow,
        movable: false,
        resizable: false,
        skipTaskbar: true,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: false,
          devTools: true
        }
      });

      yiyanWindow.loadURL("https://yiyan.baidu.com");
      if (store.get("isLogin")) {
        yiyanWindow.webContents.executeJavaScript(`
          var script = document.createElement('script');
          script.type = "text/javascript";
          script.src = "http://127.0.0.1:8884/baidu/baidu.js";
          document.head.appendChild(script);
          var script = document.createElement('script');
          script.type = "text/javascript";
          script.src = "http://127.0.0.1:8884/baidu/vendors.js";
          document.head.appendChild(script);
          var script = document.createElement('link');
          script.rel = "stylesheet";
          script.href = "http://127.0.0.1:8884/baidu/index.css";
          document.head.appendChild(script);
          var script = document.createElement('link');
          script.rel = "stylesheet";
          script.href = "http://127.0.0.1:8884/baidu/vendors.css";
          document.head.appendChild(script);
        `);
      }

      kimiWindow = new BrowserWindow({
        x: windowWidth + 10,
        y: mainWindow.getBounds().y + 32,
        frame: false,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90,
        autoHideMenuBar: true,
        parent: mainWindow,
        movable: false,
        resizable: false,
        skipTaskbar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1",
          devTools: true
        }
      });
      kimiWindow.loadURL("https://kimi.moonshot.cn/");
      if (store.get("isLogin")) {
        kimiWindow.webContents.executeJavaScript(`
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/kimi/umi.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/kimi/framework.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/kimi/react.production.min.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/kimi/react-dom.production.min.js";
            document.head.appendChild(script);
            var script = document.createElement('link');
            script.rel = "stylesheet";
            script.href = "http://127.0.0.1:8884/kimi/umi.css";
            document.head.appendChild(script);
        `);
      }

      zhipuWindow = new BrowserWindow({
        x: windowWidth * 2 + 15,
        y: mainWindow.getBounds().y + 32,
        frame: false,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90,
        autoHideMenuBar: true,
        parent: mainWindow,
        movable: false,
        resizable: false,
        skipTaskbar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          devTools: true
        }
      });
      zhipuWindow.webContents.setUserAgent(mobileAgent);
      zhipuWindow.loadURL("https://chatglm.cn/");
      if (store.get("isLogin")) {
        zhipuWindow.webContents.executeJavaScript(`
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/chatglm/js/app.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/chatglm/js/vendors.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/chatglm/jmlink.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/chatglm/sensorsdata.min.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/chatglm/sat-props-patch/index.js";
            document.head.appendChild(script);
            var script = document.createElement('link');
            script.rel = "stylesheet";
            script.href = "http://127.0.0.1:8884/chatglm/css/app.css";
            document.head.appendChild(script);
            var script = document.createElement('link');
            script.rel = "stylesheet";
            script.href = "http://127.0.0.1:8884/chatglm/css/vendors.css";
            document.head.appendChild(script);
        `);
      }

      tongyiWindow = new BrowserWindow({
        x: windowWidth * 3 + 20,
        y: mainWindow.getBounds().y + 32,
        frame: false,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90,
        autoHideMenuBar: true,
        parent: mainWindow,
        movable: false,
        resizable: false,
        skipTaskbar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          devTools: true
        }
      });
      tongyiWindow.webContents.setUserAgent(mobileAgent);
      tongyiWindow.loadURL("https://tongyi.aliyun.com/qianwen");
      if (store.get("isLogin")) {
        tongyiWindow.webContents.executeJavaScript(`
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/tongyi/tongyi.js";
            document.head.appendChild(script);
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "http://127.0.0.1:8884/tongyi/baxia_entrypoint.js";
            document.head.appendChild(script);
            var script = document.createElement('link');
            script.rel = "stylesheet";
            script.href = "http://127.0.0.1:8884/tongyi/index.css";
            document.head.appendChild(script);
        `);
      }

      bottomWindow = new BrowserWindow({
        x: mainWindow.getBounds().x + 5,
        y: mainWindow.getBounds().y + mainWindow.getBounds().height - 52,
        frame: false,
        width: mainWindow.getBounds().width - 12,
        height: 42,
        autoHideMenuBar: true,
        parent: mainWindow,
        movable: false,
        resizable: false,
        skipTaskbar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1",
          devTools: true
        }
      });
      bottomWindow.loadFile("./textarea.html");

      mainWindow.on("close", () => {
        app.quit();
      });

      ipcMain.on("inputBox", (event, value) => {
        zhipuWindow.webContents.executeJavaScript(`
          localStorage.setItem("inputValue", ${JSON.stringify(value)});
        `);
        kimiWindow.webContents.executeJavaScript(`
          localStorage.setItem("inputValue", ${JSON.stringify(value)});
        `);
        tongyiWindow.webContents.executeJavaScript(`
          localStorage.setItem("inputValue", ${JSON.stringify(value)});
        `);
        yiyanWindow.webContents.executeJavaScript(`
          localStorage.setItem("inputValue", ${JSON.stringify(value)});
        `);
      });

      function hideAll() {
        zhipuWindow.hide();
        kimiWindow.hide();
        tongyiWindow.hide();
        yiyanWindow.hide();
      }

      function showOne(win) {
        hideAll();
        const windowWidth = Math.floor(
          (mainWindow.getBounds().width - 5 * (1 + 1)) / 1
        );
        win.setBounds({
          x: mainWindow.getBounds().x + 5,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win.show();
      }

      function showTwo(win1, win2) {
        hideAll();
        const windowWidth = Math.floor(
          (mainWindow.getBounds().width - 5 * (1 + 2)) / 2
        );
        win1.setBounds({
          x: mainWindow.getBounds().x + 5,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win2.setBounds({
          x: mainWindow.getBounds().x + windowWidth + 10,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win1.show();
        win2.show();
      }

      function showThree(win1, win2, win3) {
        hideAll();
        const windowWidth = Math.floor(
          (mainWindow.getBounds().width - 5 * (1 + 3)) / 3
        );
        win1.setBounds({
          x: mainWindow.getBounds().x + 5,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win1.show();
        if (win2) {
          win2.setBounds({
            x: mainWindow.getBounds().x + windowWidth + 10,
            y: mainWindow.getBounds().y + 32,
            width: windowWidth,
            height: mainWindow.getBounds().height - 90
          });
          win2.show();
        }
        if (win3) {
          win3.setBounds({
            x: mainWindow.getBounds().x + windowWidth * 2 + 15,
            y: mainWindow.getBounds().y + 32,
            width: windowWidth,
            height: mainWindow.getBounds().height - 90
          });
          win3.show();
        }
      }

      function showFour(win1, win2, win3, win4) {
        hideAll();
        const windowWidth = Math.floor(
          (mainWindow.getBounds().width - 5 * (1 + 4)) / 4
        );
        win1.setBounds({
          x: mainWindow.getBounds().x + 5,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win2.setBounds({
          x: mainWindow.getBounds().x + windowWidth + 10,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win3.setBounds({
          x: mainWindow.getBounds().x + windowWidth * 2 + 15,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win4.setBounds({
          x: mainWindow.getBounds().x + windowWidth * 3 + 20,
          y: mainWindow.getBounds().y + 32,
          width: windowWidth,
          height: mainWindow.getBounds().height - 90
        });
        win1.show();
        win2.show();
        win3.show();
        win4.show();
      }

      ipcMain.on("event", (event, url) => {
        const modelNum = store.get("modelNum") || 4;
        if (url === "yiyan") {
          if (modelNum === 1) {
            showOne(yiyanWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').removeClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').removeClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 2) {
            showTwo(yiyanWindow, kimiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').removeClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 3) {
            showThree(yiyanWindow, kimiWindow, zhipuWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 4) {
            showFour(yiyanWindow, kimiWindow, zhipuWindow, tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          }
          bottomWindow.focus();
          return;
        }
        if (url === "tongyi") {
          if (modelNum === 1) {
            showOne(tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').removeClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').removeClass('ant-segmented-item-selected');
              $('#kimi').removeClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 2) {
            showTwo(zhipuWindow, tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').removeClass('ant-segmented-item-selected');
              $('#kimi').removeClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 3) {
            showThree(tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#zhipu').removeClass('ant-segmented-item-selected');
              $('#yiyan').removeClass('ant-segmented-item-selected');
              $('#kimi').removeClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 4) {
            showFour(yiyanWindow, kimiWindow, zhipuWindow, tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          }
          bottomWindow.focus();
          return;
        }
        if (url === "kimi") {
          if (modelNum === 1) {
            showOne(kimiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').removeClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').removeClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 2) {
            showTwo(yiyanWindow, kimiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').removeClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 3) {
            showThree(yiyanWindow, kimiWindow, zhipuWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 4) {
            showFour(yiyanWindow, kimiWindow, zhipuWindow, tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          }
          bottomWindow.focus();
          return;
        }
        if (url === "zhipu") {
          if (modelNum === 1) {
            showOne(zhipuWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').removeClass('ant-segmented-item-selected');
              $('#kimi').removeClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 2) {
            showTwo(zhipuWindow, tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').removeClass('ant-segmented-item-selected');
              $('#kimi').removeClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 3) {
            showThree(yiyanWindow, kimiWindow, zhipuWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').removeClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          } else if (modelNum === 4) {
            showFour(yiyanWindow, kimiWindow, zhipuWindow, tongyiWindow);
            mainWindow.webContents.executeJavaScript(`
              $('#zhipu').addClass('ant-segmented-item-selected');
              $('#tongyi').addClass('ant-segmented-item-selected');
              $('#yiyan').addClass('ant-segmented-item-selected');
              $('#kimi').addClass('ant-segmented-item-selected');
            `);
          }
          bottomWindow.focus();
          return;
        }
        if (url === "minWin") {
          mainWindow.minimize();
          bottomWindow.focus();
          return;
        }
        if (url === "exit") {
          app.quit();
          return;
        }
        if (url === "skin") {
          store.set("isLogin", !store.get("isLogin"));
          return;
        }
        if (url === "oneWindow") {
          initWidth(1);
          mainWindow.webContents.executeJavaScript(`
            $('#zhipu').removeClass('ant-segmented-item-selected');
            $('#tongyi').removeClass('ant-segmented-item-selected');
            $('#yiyan').addClass('ant-segmented-item-selected');
            $('#kimi').removeClass('ant-segmented-item-selected');
          `);
          yiyanWindow.show();
          kimiWindow.hide();
          tongyiWindow.hide();
          zhipuWindow.hide();
          bottomWindow.focus();
          return;
        }
        if (url === "twoWindow") {
          initWidth(2);
          mainWindow.webContents.executeJavaScript(`
            $('#zhipu').removeClass('ant-segmented-item-selected');
            $('#tongyi').removeClass('ant-segmented-item-selected');
            $('#yiyan').addClass('ant-segmented-item-selected');
            $('#kimi').addClass('ant-segmented-item-selected');
          `);
          yiyanWindow.show();
          kimiWindow.show();
          zhipuWindow.hide();
          tongyiWindow.hide();
          bottomWindow.focus();
          return;
        }
        if (url === "threeWindow") {
          initWidth(3);
          mainWindow.webContents.executeJavaScript(`
            $('#zhipu').addClass('ant-segmented-item-selected');
            $('#tongyi').removeClass('ant-segmented-item-selected');
            $('#yiyan').addClass('ant-segmented-item-selected');
            $('#kimi').addClass('ant-segmented-item-selected');
          `);
          yiyanWindow.show();
          kimiWindow.show();
          zhipuWindow.show();
          tongyiWindow.hide();
          bottomWindow.focus();
          return;
        }
        if (url === "fourWindow") {
          initWidth(4);
          mainWindow.webContents.executeJavaScript(`
            $('#zhipu').addClass('ant-segmented-item-selected');
            $('#tongyi').addClass('ant-segmented-item-selected');
            $('#yiyan').addClass('ant-segmented-item-selected');
            $('#kimi').addClass('ant-segmented-item-selected');
          `);
          yiyanWindow.show();
          kimiWindow.show();
          zhipuWindow.show();
          tongyiWindow.show();
          bottomWindow.focus();
          return;
        }
        if (url === "submit") {
          kimiWindow.webContents.executeJavaScript(`
            document.getElementById("send-button").click();
          `);
          zhipuWindow.webContents.executeJavaScript(`
            document.querySelector(".button-right-inner").click()
          `);
          tongyiWindow.webContents.executeJavaScript(`
            document.querySelector(".send-button").click()
          `);
          yiyanWindow.webContents.executeJavaScript(`
            document.querySelector(".send-button").click()
          `);
          return;
        }
      });
      initWidth(modelNum);
      bottomWindow.focus();
    });
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
