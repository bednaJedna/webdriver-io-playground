module.exports.default = class Page {
    open(path) {
        browser.url(path);
    }

    maximize() {
        browser.maximizeWindow()
    }
}