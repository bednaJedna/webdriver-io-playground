module.exports.default = class Page {
    open(path) {
        browser.url(path);
    }

    switch_to_frame(iframe) {
        browser.switchToFrame(iframe)
    }

    switch_to_page() {
        browser.switchToParentFrame()
    }
}
