//Contains various subscriber implementations logging

const Observable = require('../Observable')

class DatabaseLogSubscriber {
    constructor() {
        this.observable = new Observable()
        this.observable.subscribe(this.log)
    }

    log(data) {
        console.log("Database log:", data)
    }
}

module.exports = DatabaseLogSubscriber