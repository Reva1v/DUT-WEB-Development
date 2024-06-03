const EventEmitter = require('events')
class Shop extends EventEmitter {
    constructor() {
        super()
    }
    addToCart(nameOfProduct, qty) {
        console.log("You added this product to cart: " + qty + " " + nameOfProduct);
        this.emit("cartItemAdded", nameOfProduct, qty)
    }

    pay(nameOfCard){
        console.log("Your payment card: " + nameOfCard);
        this.emit("cardPaid", nameOfCard);
    }
}

module.exports = Shop