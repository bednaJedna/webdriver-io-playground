class Network {

    start_network_listener() {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            //this container has to be defined in
            //configuration file wdio.conf.js since it is 
            //globally accessed variable via browser.config
            browser.config.listener_container.unshift(params.response.url)
        })
    }

    check_for_tag(substring) {
        browser.pause(1000)

        for (var item of browser.config.listener_container) {
            if (String(item).includes(substring)) {
                return true
            } else {
                console.log(item + ' not contains ' + substring)
            }
        }

        return false
    }

}

module.exports = new Network()