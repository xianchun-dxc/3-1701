const { ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("minWin");
  button.addEventListener("click", function () {
    ipcRenderer.send("event", "minWin");
  });
  var exitButton = document.getElementById("exit");
  exitButton.addEventListener("click", function () {
    ipcRenderer.send("event", "exit");
  });
});
