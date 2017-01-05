var storage = browser.storage.sync || browser.storage.local;

var message = (s) => {
    document.querySelector("#status").textContent = s;
};

var restoreOptions = () => {
    storage.get({"original": ""}).then((items) => {
        document.querySelector("#urls").value = items.original;
    }, (err) => {
        message(err);
    });
};

var saveOptions = () => {
    var str = document.querySelector("#urls").value;
    var lines = str.split(/\r?\n/)
        .filter(str => str.length > 0)
        .map(normalizeSlash);
    
    var urls = Object.create(null);
    lines.forEach((s) => {
        urls[s] = true;
    });

    // Store the URLs as a map (for future lookup), 
    // and the original string content (for re-displaying).
    storage.set({"urls": urls, "original": str}).then(() => {
        message("URLs saved");
        setTimeout(() => { message("") }, 1000);
    }, (err) => {
        message(err);
        console.error(err);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    restoreOptions();
    document.querySelector("#save").addEventListener("click", saveOptions);
});
