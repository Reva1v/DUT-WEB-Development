const EventEmitter = require('events')

class Stock extends EventEmitter {
    constructor() {
        super()
    }

    composeProductsInCart() {
        console.log("Composed products")
        this.emit("composeProduct");
    }

    deliveryProducts() {
        console.log("Your products is on delivery")
        this.emit("deliveryStart")
    }
}

module.exports = Stock