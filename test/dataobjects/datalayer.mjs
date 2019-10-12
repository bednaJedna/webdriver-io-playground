class DataLayer {
    
    get datalayer() {
        return browser.execute(() => {
            return window.dataLayer
        })
    }

    find_activity(matrixId) {
        var status = false

        this.datalayer.reverse().forEach(function (activity) {
            if (activity.matrixId == matrixId) {
                return status = true
            } 
        })

        return status
    }
}

module.exports = new DataLayer()