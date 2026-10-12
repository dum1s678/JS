const price = 2000;
const discount = 15;

let total = (price / 100) * (100 - discount)
let deliver = 500

if (total >= 5000) {
    console.log("Доставка бесплатная")
}
else {
    console.log(total + deliver)
}

