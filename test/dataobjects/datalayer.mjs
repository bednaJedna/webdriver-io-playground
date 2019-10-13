var activities = require('../dataobjects/activities.json')

class DataLayer {

    get datalayer() {
        return browser.execute(() => {
            return window.dataLayer
        })
    }

    check_activity_for_presence(matrixId) {
        for (var activity of this.datalayer.reverse()) {
            if (activity.matrixId == matrixId) {
                return true
            } else {
                continue
            }
        }

        return false
    }

    verify_activity_props(matrixId, page) {
        const dl = this.datalayer.reverse()
        const props = Object.keys(activities[matrixId][page])

        for (var activity of dl) {
            if (activity.matrixId != matrixId) {
                continue
            } else {
                for (var prop of props) {
                    if (Object.keys(activity).includes(prop)) {
                        continue
                    } else {
                        return false
                    }
                }
            }
            break
        }
        return true
    }

    verify_activity_values(matrixId, page) {
        const dl = this.datalayer.reverse()
        const values = Object.values(activities[matrixId][page])

        for (var activity of dl) {
            if (activity.matrixId != matrixId) {
                continue
            } else {
                for (var value of values) {
                    if (Object.values(activity).includes(value)) {
                        continue
                    } else {
                        return false
                    }
                }
            }
            break

        }
        
        return true
    }
}

module.exports = new DataLayer()