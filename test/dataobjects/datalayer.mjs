var activities = require('../dataobjects/activities.json')

class DataLayer {

    get datalayer() {
        return browser.execute(() => {
            return window.dataLayer
        })
    }

    check_activity_for_presence(matrixId) {
        var status = false

        for (var activity of this.datalayer.reverse()) {
            if (activity.matrixId == matrixId) {
                status = true
                break
            } else {
                continue
            }
        }

        return status
    }

    verify_activity(matrixId) {
        var status = true
        const dl = this.datalayer.reverse()
        const props = activities[matrixId]

        for (var activity of dl) {
            if (activity.matrixId != matrixId) {
                continue
            } else {
                for (var prop of Object.keys(activity)) {
                    if (props.includes(prop)) {
                        continue
                    } else {
                        status = false
                        break
                    }
                }
            }
        }
        return status
    }
}

module.exports = new DataLayer()