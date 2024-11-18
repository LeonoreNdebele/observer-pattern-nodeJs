//Contains  subscriber implementations of notification

const Observable = require('../Observable')

class NotifySubscriber {
    constructor() {
        this.observable = new Observable()
        this.observable.subscribe(this.notify)
    }

    notify(data) {
        console.log("Notify:", data)
    }
}

module.exports = NotifySubscriber