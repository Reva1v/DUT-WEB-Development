const Shop = require('./Shop')
const Stock = require('./Stock')

const myShop = new Shop()
const myStock = new Stock()

myShop.on('cartItemAdded', function (nameOfCard){
   console.log('Item added to cart')
});

myStock.on('composeProduct', function (){
    console.log('Compose successful')
})

myShop.on('cardPaid', function (nameOfCard){
    console.log('Paid successful')
});

myStock.on('deliveryStart', function (){
    console.log('Delivery is started')
})

myShop.addToCart('Cucumber', 3)

myStock.composeProductsInCart()

myShop.pay('Master')

myStock.deliveryProducts()

myShop.addToCart('Hui', 2)

myShop.pay('Visa')





// {
//     const evt = require('events');
//
//     let emitter = new evt.EventEmitter();
//
//     emitter.on('create', function(){
//         console.log('Folder was created!');
//     });
//
//     emitter.emit('create');
//
//     let shop = require('Shop')
//
//     shop.prototype.pay("Master")
// }