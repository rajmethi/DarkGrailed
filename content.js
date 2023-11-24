chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "injectDarkMode") {
      const style = document.createElement("link");
      style.rel = "stylesheet";
      style.type = "text/css";
      style.href = chrome.extension.getURL("dark-mode.css");
      document.head.appendChild(style);
    }
  });