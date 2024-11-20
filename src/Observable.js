class Observable {
	constructor() {
		this.subscribers = []
	}

	// Method to add a subscriber
	subscribe(fn) {
		this.subscribers.push(fn)
	}

	// Method to remove a subscriber
	unsubscribe(fn) {
		const idx = this.subscribers.findIndex(fn);
		this.subscribers.splice(idx, 1);
	}

	// Method to notify all subscribers
	notify(data) {
		this.subscribers.forEach(item => {
			item(data)
		});
	}
}

module.exports = Observable
