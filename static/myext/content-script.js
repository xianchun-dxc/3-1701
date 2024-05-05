function loadPage() {
  try {
    document.body.addEventListener("dblclick", function () {
      fetch(
        "http://127.0.0.1:8884/maxWindow/" +
          encodeURIComponent(document.querySelector(".title-style")? .innerHTML || '智谱清言') +
          "?t=" +
          new Date().getTime()
      );
    });
  } catch (error) {
    setTimeout(() => {
      loadPage();
    }, 1000);
  }
}

window.onload = function () {
  loadPage();
};
