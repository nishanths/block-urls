var normalizeSlash = (u) => {
    // If there is a trailing slash and no query string and no fragment,
    // return u with the trailing slash removed.
    var q = u.indexOf("?");
    var f = u.indexOf("#");
    if (u.length > 0 && u[u.length-1] === "/" && q === -1 && f === -1) {
        return u.substring(0, u.length-1);
    }

    var idx = -1;
    if (q !== -1) {
        idx = q;
    } else if (f !== -1) {
        idx = f;
    }

    // If there is a query string or a fragment, and the previous character
    // is a slash, return u with the slash removed.
    if (idx > 0 && u[idx-1] === "/") {
        return u.substring(0, idx-1) + u.substring(idx);
    }

    return u;
};

// module.exports = { normalizeSlash: normalizeSlash };
