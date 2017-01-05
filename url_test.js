var deepStrictEqual = require('assert').deepStrictEqual;
var url = require('./url.js');

var tests = [
    ["", ""],
    ["https://google.com", "https://google.com"],
    ["https://example.com/", "https://example.com"],
    ["https://example.com//", "https://example.com/"],
    ["https://example.com/?q=foo", "https://example.com?q=foo"],
    ["https://example.com//?q=foo", "https://example.com/?q=foo"],
    ["https://example.com/#bar", "https://example.com#bar"],
    ["https://example.com//#bar", "https://example.com/#bar"],
    ["https://example.com/?q=foo#bar", "https://example.com?q=foo#bar"],
    ["https://example.com//?q=foo#bar", "https://example.com/?q=foo#bar"],
    ["https://example.com/?#", "https://example.com?#"],
];

tests.forEach((t) => {
    deepStrictEqual(url.normalizeSlash(t[0]), t[1]);
});
