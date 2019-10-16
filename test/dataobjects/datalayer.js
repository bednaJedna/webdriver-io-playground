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

    verify_activity({
        matrixId = null,
        page = null,
        to_check = null
    }) {
        const dl = this.datalayer.reverse()
        var items = null
        var dl_items = null

        if (to_check == 'props') {
            items = Object.keys(activities[matrixId][page])
        } else {
            items = Object.values(activities[matrixId][page])
        }

        for (var activity of dl) {
            if (activity.matrixId != matrixId) {
                continue
            } else {
                if (to_check == 'props') {
                    dl_items = Object.keys(activity)
                } else {
                    dl_items = Object.values(activity)
                }

                for (var item of items) {
                    if (dl_items.includes(item)) {
                        continue
                    } else {
                        console.log(item)
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