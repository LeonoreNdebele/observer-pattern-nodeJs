//Contains subscriber notification via email

const Observable = require('../Observable')

class EmailSubscriber {
    constructor() {
        this.observable = new Observable()
        this.observable.subscribe(this.sendEmail)
    }

    sendEmail(data) {
        console.log("Email sent:", data)
    }
}

module.exports = EmailSubscriber