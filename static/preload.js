const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping")
});

contextBridge.exposeInMainWorld("electron", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  receive: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  }
});

contextBridge.exposeInMainWorld("electronAPI", {
  setTitle: (title) => ipcRenderer.send("set-title", title),
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  handleCounter: (callback) => ipcRenderer.on("update-counter", callback)
});

ipcRenderer.on("port", (e) => {
  // 接收到端口，使其全局可用。
  window.electronMessagePort = e.ports[0];
  window.electronMessagePort.onmessage = (messageEvent) => {
    // 处理消息
    alert(messageEvent);
  };
});
