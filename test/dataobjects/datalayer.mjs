var Activites = require('../dataobjects/activities.mjs').default

class DataLayer extends Activites {
    
    get datalayer() {
        return browser.execute(() => {
            return window.dataLayer
        })
    }

    find_activity(matrixId) {
        var status = false

        for (var activity of this.datalayer) {
            if (activity.matrixId == matrixId) {
                status = true
                break
            } else {
                continue
            }
        }
        
        return status
    }

}

module.exports = new DataLayer()