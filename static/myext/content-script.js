window.onload = function () {
  $("head").append(
    '<link id="mycss" rel="stylesheet" type="text/css" href="' +
      chrome.extension.getURL("night.css") +
      '">'
  );
  $("body").dblclick(() => {
    $.get("http://127.0.0.1:8884/message_from_content_script")
    $("#mycss").remove();
    $("head").append(
      '<link id="mycss" rel="stylesheet" type="text/css" href="' +
        chrome.extension.getURL("day.css") +
        '">'
    );
  });

  localStorage.setItem("extval", "running");
  setTimeout(() => {
    localStorage.setItem("extval", "dbfs@kmn");
  }, 1000);
};
