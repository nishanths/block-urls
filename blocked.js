document.addEventListener("DOMContentLoaded", () => {
    var qs = new URLSearchParams(window.location.search);
    var u = qs.get("from");
    document.querySelector("#blocked-url").textContent = u;
})
