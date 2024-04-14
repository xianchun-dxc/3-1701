const { app, session, BrowserWindow, ipcMain, screen } = require("electron");
const express = require("express");
const path = require("path");
const ElectronStore = require("electron-store");
const store = new ElectronStore();
const mobileAgent =
  "Mozilla/5.0 (Linux; Android 10; Pixel 3 Build/QP1A.191005.007.A3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.116 Mobile Safari/537.36";

let leftWindow;
let midWindow;
let rightWindow;
let mainWindow;
let bottomWindow;
let zhipuWindow;
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
  leftWindow.setBounds({
    x: mainWindow.getBounds().x + 5,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
  if (modelNum < 2) {
    return;
  }
  midWindow.setBounds({
    x: mainWindow.getBounds().x + windowWidth + 10,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
  if (modelNum < 3) {
    return;
  }
  rightWindow.setBounds({
    x: mainWindow.getBounds().x + windowWidth * 2 + 15,
    y: mainWindow.getBounds().y + 32,
    width: windowWidth,
    height: mainWindow.getBounds().height - 90
  });
}

function createWindow() {
  const modelNum = store.get("modelNum") || 2;
  const primaryDisplay = screen.getPrimaryDisplay();
  const windowWidth = Math.floor(
    (primaryDisplay.size.width - 5 * (modelNum + 1)) / modelNum
  );
  const windowHeight = primaryDisplay.size.height;
  session.defaultSession
    .loadExtension(path.join(__dirname, "myext"))
    .then(() => {
      startHttpServer();

      session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
        const url = details.url.toLocaleLowerCase();
        if (
          url.includes("acs-") ||
          url.includes("moonshot.cn/kimi-chat") || // kimi
          url.includes("https://chatglm.cn/js/") || // chatglm
          url.includes("https://chatglm.cn/css/") || // chatglm
          url.includes("https://chatglm.cn/jmlink.js") || // chatglm
          url.includes("https://chatglm.cn/sensorsdata.min.js") || // chatglm
          url.includes("https://chatglm.cn/sat-props-patch/index.js") || // chatglm
          url.includes("https://static.tiangong.cn/wwwsite/") || // tiangong
          url.includes("static/eb/js/index")
        ) {
          callback({ cancel: true });
        } else {
          callback({});
        }
      });

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

      leftWindow = new BrowserWindow({
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
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          devTools: true
        }
      });

      // leftWindow.loadURL("https://yiyan.baidu.com");
      // leftWindow.loadURL("https://xinghuo.xfyun.cn/");
      // leftWindow.webContents.setUserAgent(mobileAgent);
      // leftWindow.webContents.executeJavaScript(`
      //     var script = document.createElement('script');
      //     script.type = "text/javascript";
      //     script.src = "http://127.0.0.1:8884/index.0402.js";
      //     document.head.appendChild(script);
      // `);

      zhipuWindow = new BrowserWindow({
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
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          devTools: true
        }
      });
      zhipuWindow.webContents.setUserAgent(mobileAgent);
      zhipuWindow.loadURL("https://chatglm.cn/");
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

      midWindow = new BrowserWindow({
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
      midWindow.loadURL("https://kimi.moonshot.cn/");
      midWindow.webContents.executeJavaScript(`
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

      rightWindow = new BrowserWindow({
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
          devTools: true
        }
      });
      // rightWindow.webContents.setUserAgent(mobileAgent);
      rightWindow.loadURL("https://xinghuo.xfyun.cn");
      // rightWindow.loadURL("https://www.tiangong.cn");
      // rightWindow.webContents.executeJavaScript(`
      //     var script = document.createElement('script');
      //     script.type = "module";
      //     script.src = "http://192.168.3.20:8884/tiangong/index.js";
      //     document.head.appendChild(script);
      // `);

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
        midWindow.webContents.executeJavaScript(`
          localStorage.setItem("inputValue", ${JSON.stringify(value)});
        `);
      });

      ipcMain.on("event", (event, url) => {
        if (url === "minWin") {
          mainWindow.minimize();
          return;
        }
        if (url === "exit") {
          app.quit();
          return;
        }
        if (url === "oneWindow") {
          initWidth(1);
          midWindow.hide();
          rightWindow.hide();
          return;
        }
        if (url === "twoWindow") {
          initWidth(2);
          midWindow.show();
          rightWindow.hide();
          return;
        }
        if (url === "threeWindow") {
          initWidth(3);
          midWindow.show();
          rightWindow.show();
          return;
        }
        if (url === "submit") {
          midWindow.webContents.executeJavaScript(`
            document.getElementById("send-button").click();
          `);
          zhipuWindow.webContents.executeJavaScript(`
            document.querySelector(".button-right-inner").click()
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
