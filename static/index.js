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
let xunfeiWindow;
let mainWindow;
let bottomWindow;
let firstLoad = true;

function hideAll() {
  zhipuWindow.hide();
  kimiWindow.hide();
  tongyiWindow.hide();
  yiyanWindow.hide();
  xunfeiWindow.hide();
}

function openTipsWindows(tips) {
  const tipsWindow = new BrowserWindow({
    frame: false,
    width: 240,
    height: 50,
    autoHideMenuBar: true,
    parent: mainWindow,
    movable: false,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  tipsWindow.loadFile("error.html");
  tipsWindow.webContents.executeJavaScript(`document.body.append('${tips}')`);
  setTimeout(() => {
    tipsWindow.close();
    tipsWindow.destroy();
  }, 3000);
}

function startHttpServer() {
  if (!firstLoad) {
    return;
  }
  firstLoad = false;

  // 创建 Express 服务器
  const expressApp = express();
  const PORT = 8884;
  // 设置静态文件目录（存放图片）
  expressApp.use(express.static(path.join(__dirname, "")));

  expressApp.get(
    "/maxWindow/%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE",
    (req, res) => {
      hideAll();
      const windowWidth = Math.floor(
        (mainWindow.getBounds().width - 5 * (1 + 1)) / 1
      );
      tongyiWindow.setBounds({
        x: mainWindow.getBounds().x + 5,
        y: mainWindow.getBounds().y + 32,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90
      });
      tongyiWindow.show();
      bottomWindow.focus();
      res.send("success");
    }
  );
  expressApp.get(
    "/maxWindow/%E6%9C%88%E4%B9%8B%E6%9A%97%E9%9D%A2",
    (req, res) => {
      hideAll();
      const windowWidth = Math.floor(
        (mainWindow.getBounds().width - 5 * (1 + 1)) / 1
      );
      kimiWindow.setBounds({
        x: mainWindow.getBounds().x + 5,
        y: mainWindow.getBounds().y + 32,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90
      });
      kimiWindow.show();
      bottomWindow.focus();
      res.send("success");
    }
  );
  expressApp.get(
    "/maxWindow/%E6%96%87%E5%BF%83%E4%B8%80%E8%A8%80",
    (req, res) => {
      hideAll();
      const windowWidth = Math.floor(
        (mainWindow.getBounds().width - 5 * (1 + 1)) / 1
      );
      yiyanWindow.setBounds({
        x: mainWindow.getBounds().x + 5,
        y: mainWindow.getBounds().y + 32,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90
      });
      yiyanWindow.show();
      bottomWindow.focus();
      res.send("success");
    }
  );
  expressApp.get(
    "/maxWindow/%E6%99%BA%E8%B0%B1%E6%B8%85%E8%A8%80",
    (req, res) => {
      hideAll();
      const windowWidth = Math.floor(
        (mainWindow.getBounds().width - 5 * (1 + 1)) / 1
      );
      zhipuWindow.setBounds({
        x: mainWindow.getBounds().x + 5,
        y: mainWindow.getBounds().y + 32,
        width: windowWidth,
        height: mainWindow.getBounds().height - 90
      });
      zhipuWindow.show();
      bottomWindow.focus();
      res.send("success");
    }
  );

  // 启动服务器
  server = expressApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // 监听 app-quit 事件，在事件处理函数中关闭 HTTP 服务
  expressApp.on("app-quit", () => {
    server.close();
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
              url.includes(
                "https://xhspdup.xfyun.cn/static/js/main.c7cc7a76.js"
              ) || // xunfei
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

      function openYiyan() {
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
      }
      openYiyan();

      function openKimi() {
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
      }
      openKimi();

      function openXunfei() {
        xunfeiWindow = new BrowserWindow({
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
            nodeIntegration: false,
            contextIsolation: false,
            devTools: true
          }
        });
        xunfeiWindow.webContents.setUserAgent(mobileAgent);
        xunfeiWindow.loadURL("https://xinghuo.xfyun.cn/desk");
        if (store.get("isLogin")) {
          xunfeiWindow.webContents.executeJavaScript(`
              var script = document.createElement('script');
              script.type = "text/javascript";
              script.src = "http://127.0.0.1:8884/xunfei/js/xunfei.js";
              document.head.appendChild(script);
          `);
        }
      }
      openXunfei();

      function openZhipu() {
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
      }
      openZhipu();

      function openTongyi() {
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
      }
      openTongyi();

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
        if (zhipuWindow) {
          zhipuWindow.webContents.executeJavaScript(`
            localStorage.setItem("inputValue", ${JSON.stringify(value)});
          `);
        }
        if (kimiWindow) {
          kimiWindow.webContents.executeJavaScript(`
            localStorage.setItem("inputValue", ${JSON.stringify(value)});
          `);
        }
        if (tongyiWindow) {
          tongyiWindow.webContents.executeJavaScript(`
            localStorage.setItem("inputValue", ${JSON.stringify(value)});
          `);
        }
        if (yiyanWindow) {
          yiyanWindow.webContents.executeJavaScript(`
            localStorage.setItem("inputValue", ${JSON.stringify(value)});
          `);
        }
        if (xunfeiWindow) {
          xunfeiWindow.webContents.executeJavaScript(`
            localStorage.setItem("inputValue", ${JSON.stringify(value)});
          `);
        }
      });

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

      const windowMap = {
        yiyan: yiyanWindow,
        kimi: kimiWindow,
        zhipu: zhipuWindow,
        xunfei: xunfeiWindow,
        tongyi: tongyiWindow
      };

      const clickWin = (url) => {
        let openedWindows = store.get("openedWindows") || [
          "yiyan",
          "kimi",
          "zhipu",
          "xunfei"
        ];
        if (url) {
          if (openedWindows.includes(url)) {
            const newWindows = openedWindows.filter((item) => item !== url);
            openedWindows = newWindows;
            mainWindow.webContents.executeJavaScript(`
              $('#${url}').removeClass('ant-segmented-item-selected');
            `);
          } else {
            if (openedWindows.length === 4) {
              openTipsWindows("最多选择4个大模型!");
              return;
            }
            openedWindows.push(url);
            mainWindow.webContents.executeJavaScript(`
              $('#${url}').addClass('ant-segmented-item-selected');
            `);
          }
        } else {
          for (let i = 0; i < openedWindows.length; i++) {
            mainWindow.webContents.executeJavaScript(`
              $('#${openedWindows[i]}').addClass('ant-segmented-item-selected');
            `);
          }
        }
        openedWindows.sort();
        store.set("openedWindows", openedWindows);
        if (openedWindows.length === 1) {
          showOne(windowMap[openedWindows[0]]);
        } else if (openedWindows.length === 2) {
          showTwo(windowMap[openedWindows[0]], windowMap[openedWindows[1]]);
        } else if (openedWindows.length === 3) {
          showThree(
            windowMap[openedWindows[0]],
            windowMap[openedWindows[1]],
            windowMap[openedWindows[2]]
          );
        } else if (openedWindows.length === 4) {
          showFour(
            windowMap[openedWindows[0]],
            windowMap[openedWindows[1]],
            windowMap[openedWindows[2]],
            windowMap[openedWindows[3]]
          );
        }
        bottomWindow.focus();
      };

      ipcMain.on("event", (_, url) => {
        if (
          url === "yiyan" ||
          url === "tongyi" ||
          url === "kimi" ||
          url === "zhipu" ||
          url === "xunfei"
        ) {
          clickWin(url);
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
        if (url === "submit") {
          if (kimiWindow) {
            kimiWindow.webContents.executeJavaScript(`
              document.getElementById("send-button").click();
            `);
          }
          if (zhipuWindow) {
            zhipuWindow.webContents.executeJavaScript(`
              document.querySelector(".button-right-inner").click()
            `);
          }
          if (tongyiWindow) {
            tongyiWindow.webContents.executeJavaScript(`
              document.querySelector(".send-button").click()
            `);
          }
          if (yiyanWindow) {
            yiyanWindow.webContents.executeJavaScript(`
              document.querySelector(".send-button").click()
            `);
          }
          if (xunfeiWindow) {
            xunfeiWindow.webContents.executeJavaScript(`
              document.querySelector(".chat_send__dBrgV").click()
            `);
            setTimeout(() => {
              xunfeiWindow.webContents.executeJavaScript(`
                document.querySelector(".chat_send__dBrgV").click()
              `);
            }, 100);
          }
          return;
        }
      });

      clickWin();
    });
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
