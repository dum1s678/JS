let basePrice = 500
const age = 5
const isWeekend = true
const isEvening = true
let hasStudentCard = true

let price = basePrice

if (age >= 7 && age <= 80 ) {
if (isWeekend) {
    price += basePrice / 100 * 15
}
if (isEvening) {
    price += basePrice / 100 * 10
}
if (hasStudentCard) {
    price -= price / 100 * 15
}
console.log(price)
}
else {
    console.log("Не проходите возрастное ограничение")
}