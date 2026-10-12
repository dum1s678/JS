const price = 5000
const discount = 15
const isVIP = true
const deliveryPrice = 500
const freedeliveryTrashold = 5000

const total = price / 100 * (100 - discount)
if (price >= freedeliveryTrashold || isVIP == true) {
    var finalPrice = total
}
else {
    var finalPrice = total + deliveryPrice
}
console.log(finalPrice)