const { ipcRenderer } = require("electron");
const $ = require("jquery");

document.addEventListener("DOMContentLoaded", function () {
  $("#inputBox").on("input", () => {
    ipcRenderer.send("inputBox", $("#inputBox").val());
  });
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      ipcRenderer.send("event", "submit");
      $("#inputBox").val("");
    }
  });
  document.getElementById("minWin").addEventListener("click", function () {
    ipcRenderer.send("event", "minWin");
  });
  document.getElementById("exit").addEventListener("click", function () {
    ipcRenderer.send("event", "exit");
  });
  document.getElementById("oneWindow").addEventListener("click", function () {
    ipcRenderer.send("event", "oneWindow");
  });
  document.getElementById("twoWindow").addEventListener("click", function () {
    ipcRenderer.send("event", "twoWindow");
  });
  document.getElementById("threeWindow").addEventListener("click", function () {
    ipcRenderer.send("event", "threeWindow");
  });
  document.getElementById("skin").addEventListener("dblclick", function () {
    ipcRenderer.send("event", "skin");
  });
});
