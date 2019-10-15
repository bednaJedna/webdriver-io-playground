var expect = require('chai').expect

describe('Network experiments', () => {

    it('should listen on network events', () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        browser.url('https://www.skoda-auto.cz')
    })
})