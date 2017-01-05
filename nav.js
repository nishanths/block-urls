var storage = browser.storage.sync || browser.storage.local;

// onCommitted blocks on redirects, but onBeforeNavigate doesn't.
// 
// That is, https://www.facebook.com/profile is specified to be blocked in preferences. 
// The user enters https://facebook.com/profile, which Facebook redirects this
// to https://www.facebook.com/profile.
browser.webNavigation.onCommitted.addListener((info) => {
    var u = normalizeSlash(info.url);

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
