//Contains subscriber implemeantation of logging

const Observable = require('../Observable')

class LogSubscriber {
    constructor() {
        this.observable = new Observable()
        this.observable.subscribe(this.log)
    }

    log(data) {
        console.log("Log:", data)
    }
}

module.exports = LogSubscriber