var message = (s) => {
    document.querySelector("#status").textContent = s;
};

var restoreOptions = () => {
    chrome.storage.sync.get({"original": ""}, function(items) {
        if (chrome.runtime.lastError) {
            message(chrome.runtime.lastError);
            return;
        }
        document.querySelector("#urls").value = items.original;
    });
};

var saveOptions = () => {
    var str = document.querySelector("#urls").value;
    var lines = str.split(/\r?\n/)
        .filter(str => str.length > 0)
        .map(str => {
            if (str[str.length-1] === "/" &&            // Ends in slash.
                str.indexOf("?") === -1 &&              // No query string.
                str.indexOf("#") === -1) {              // No fragment.
                return str.substring(0, str.length-1);  // Remove ending slash.
            }
            return str;
        });
    
    var urls = Object.create(null);
    lines.forEach((s) => {
        urls[s] = true;
    });

    // Store the URLs as a map (for future lookup), 
    // and the original string content (for re-displaying).
    chrome.storage.sync.set({"urls": urls, "original": str}, function() {
        if (chrome.runtime.lastError) {
            message(chrome.runtime.lastError);
            return;
        }
        message("URLs saved");
        setTimeout(() => {
            message("");
        }, 1000);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    restoreOptions();
    document.querySelector("#save").addEventListener("click", saveOptions);
});
