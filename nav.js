chrome.webNavigation.onBeforeNavigate.addListener((info) => {
    var u = info.url;
    if (u && u.length > 0 &&
            u[u.length-1] === "/" &&    // Ends in slash.
            u.indexOf("?") === -1 &&    // No query string.
            u.indexOf("#") === -1) {    // No fragment.
        u = u.substring(0, u.length-1); // Remove the ending slash.
    }

    chrome.storage.sync.get({"urls": Object.create(null)}, (items) => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
        }
        if (!items.urls[u]) {
            return;
        }
        chrome.tabs.update(info.tabId, { url: "blocked.html?from="+encodeURIComponent(info.url) });
    });
}, { urls: ["<all_urls>"] });
