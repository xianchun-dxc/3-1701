const {
  app,
  BrowserWindow,
  ipcMain,
  dialog,
  Menu,
  Tray,
  Notification,
  nativeImage,
  MessageChannelMain
} = require("electron");
const path = require("node:path");

let progressInterval;

async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog();
  if (!canceled) {
    return filePaths[0];
  }
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });

  const secondaryWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preloadSecondary.js")
    }
  });

  // 建立通道
  const { port1, port2 } = new MessageChannelMain();

  win.once("ready-to-show", () => {
    win.webContents.postMessage("port", null, [port1]);
  });

  secondaryWindow.once("ready-to-show", () => {
    secondaryWindow.webContents.postMessage("port", null, [port2]);
  });

  ipcMain.handle("dialog:openFile", handleFileOpen);
  ipcMain.on("set-title", (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  });

  ipcMain.on("counter-value", (_event, value) => {
    console.log(value);
  });

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => win.webContents.send("update-counter", 1),
          label: "Increment"
        },
        {
          click: () => win.webContents.send("update-counter", -1),
          label: "Decrement"
        }
      ]
    }
  ]);

  // Menu.setApplicationMenu(menu);

  // win.loadFile("index.html");
  win.loadURL("https://www.baidu.com")

  const INCREMENT = 0.03;
  const INTERVAL_DELAY = 100; // ms

  let c = 0;
  progressInterval = setInterval(() => {
    // update progress bar to next value
    // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
    win.setProgressBar(c);

    // increment or reset progress bar
    if (c < 2) {
      c += INCREMENT;
    } else {
      c = -INCREMENT * 5; // reset to a bit less than 0 to show reset state
    }
  }, INTERVAL_DELAY);

  const icon = nativeImage.createFromPath("avatar.jpg");
  tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    { label: "Item1", type: "radio" },
    { label: "Item2", type: "radio" },
    { label: "Item3", type: "radio", checked: true },
    { label: "Item4", type: "radio" }
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip("This is my application");
  tray.setTitle("This is my title");
};

app.on("before-quit", () => {
  clearInterval(progressInterval);
});

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "resp from main.js");
  createWindow();

  new Notification({ title: "NOTIFY1", body: "This is content." }).show();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
