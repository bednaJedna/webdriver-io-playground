class Page {
    constructor() {

    }

    open(path) {
        browser.url(path);
    }
}

export default new Page();