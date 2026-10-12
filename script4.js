const income = 23000
const creditScore = 300
const hasCoSigner = false

if (income <= 50000 && creditScore < 500) {
    console.log("Отказ")
}
else if (income >= 150000 && creditScore > 700) {
    console.log("Одобряем")
}
else if (50000 < income < 150000 && hasCoSigner == true) {
    console.log("Одобряем")
}
else {
    console.log("Одобряем")
}