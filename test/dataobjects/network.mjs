class Network {

    enable() {
        browser.cdp('Network', 'enable')
    }

    log_responses_received() {
        browser.on('Network.responseReceived', (params) => {
            console.log(`Got: ${params.response.url}`)
        })
    }

}

module.exports = new Network()