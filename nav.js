var storage = browser.storage.sync || browser.storage.local;

// onCommitted blocks on redirects, but onBeforeNavigate doesn't.
// 
// That is, https://www.facebook.com/profile is specified to be blocked in preferences. 
// The user enters https://facebook.com/profile, which Facebook redirects this
// to https://www.facebook.com/profile.
browser.webNavigation.onCommitted.addListener((info) => {
    var u = info.url;
    if (u.length > 0 &&
            u[u.length-1] === "/" &&    // Ends in slash.
            u.indexOf("?") === -1 &&    // No query string.
            u.indexOf("#") === -1) {    // No fragment.
        u = u.substring(0, u.length-1); // Remove the ending slash.
    }

    storage.get({"urls": Object.create(null)}).then((items) => {
        if (!items.urls[u]) {
            return;
        }
        var params = new URLSearchParams();
        params.set("from", info.url);
        browser.tabs.update(info.tabId, { url: "blocked.html?"+params.toString() });
    }, (err) => {
        console.error(err);
    });
});
