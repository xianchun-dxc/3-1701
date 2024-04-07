const { app, session, BrowserWindow, ipcMain, screen } = require("electron");
const path = require("path");
const http = require("http");
const fs = require("fs");
let mainWindow;
let midWindow;
let rightWindow;
let menuWindow;
let menuHeight = 48;
let firstLoad = true;
function startHttpServer() {
  if (!firstLoad) {
    return;
  }
  firstLoad = false;
  const server = http.createServer((req, res) => {
    fs.readFile(__dirname + req.url, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error");
        return;
      }
      res.end(data);
    });
  });

  const port = 8884; // 指定端口号
  server.listen(port, () => {
    console.log(`Http server is listening on port ${port}`);
  });

  // 监听 app-quit 事件，在事件处理函数中关闭 HTTP 服务
  app.on("app-quit", () => {
    server.close();
  });
}

function createWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const windowWidth = Math.floor(primaryDisplay.size.width / 3);
  const windowHeight = primaryDisplay.size.height;
  session.defaultSession
    .loadExtension(path.join(__dirname, "myext"))
    .then(() => {
      startHttpServer();
      mainWindow = new BrowserWindow({
        x: 0,
        y: menuHeight,
        frame: false,
        width: windowWidth,
        height: windowHeight - menuHeight - 50,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1",
          devTools: true
        }
      });
      mainWindow.on("closed", function () {
        mainWindow = null;
        childWindow = null;
      });

      session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
        const url = details.url.toLocaleLowerCase();
        if (
          url.includes("acs-") ||
          url.includes("layouts_index") ||
          url.includes("static/eb/js/index")
        ) {
          callback({ cancel: true });
        } else {
          callback({});
        }
      });

      mainWindow.loadURL("https://yiyan.baidu.com");
      mainWindow.webContents.executeJavaScript(`
          var script = document.createElement('script');
          script.type = "text/javascript";
          script.src = "http://127.0.0.1:8884/index.0402.js";
          document.head.appendChild(script);
      `);

      midWindow = new BrowserWindow({
        x: windowWidth + 5,
        y: menuHeight,
        frame: false,
        width: windowWidth - 5,
        height: windowHeight - menuHeight - 50,
        autoHideMenuBar: true,
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
          script.src = "http://127.0.0.1:8884/kimi.js";
          document.head.appendChild(script);
      `);

      rightWindow = new BrowserWindow({
        x: windowWidth * 2 + 5,
        y: menuHeight,
        frame: false,
        width: windowWidth - 5,
        height: windowHeight - menuHeight - 50,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: false,
          webviewTag: true,
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1",
          devTools: true
        }
      });
      rightWindow.loadURL("https://www.tiangong.cn/chat/universal/016");

      menuWindow = new BrowserWindow({
        x: 0,
        y: 0,
        frame: false,
        width: primaryDisplay.size.width,
        height: menuHeight - 5,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          webviewTag: true,
          userAgent:
            "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/605.1",
          devTools: true
        }
      });
      menuWindow.loadFile("./menu.html");

      let lastMoveTime = 0;
      menuWindow.on("will-move", (event, newBounds) => {
        if (new Date().getTime() - lastMoveTime < 50) {
          return;
        }
        lastMoveTime = new Date().getTime();
        mainWindow.setSize(windowWidth, windowHeight - menuHeight - 50);
        midWindow.setSize(windowWidth - 5, windowHeight - menuHeight - 50);
        rightWindow.setSize(windowWidth - 5, windowHeight - menuHeight - 50);
        mainWindow.setPosition(newBounds.x, newBounds.y + menuHeight);
        midWindow.setPosition(
          newBounds.x + windowWidth + 5,
          newBounds.y + menuHeight
        );
        rightWindow.setPosition(
          newBounds.x + windowWidth * 2 + 5,
          newBounds.y + menuHeight
        );
      });

      function showAll() {
        if (!menuWindow.isVisible()) {
          menuWindow.show();
        }
        if (!mainWindow.isVisible()) {
          mainWindow.show();
        }
        if (!midWindow.isVisible()) {
          midWindow.show();
        }
        if (!rightWindow.isVisible()) {
          rightWindow.show();
        }
      }

      menuWindow.on("focus", () => {
        showAll()
      });

      menuWindow.on("close", () => {
        app.quit();
      });

      ipcMain.on("event", (event, url) => {
        if (url === "minWin") {
          menuWindow.minimize();
          mainWindow.hide();
          midWindow.hide();
          rightWindow.hide();
          return;
        }
        if (url === "exit") {
          app.quit();
        }
      });
    });
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
