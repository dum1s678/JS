const arr = [123, 143, 232, 534, 354, 646, 732, 657, 464]
const opa = []
let sum = 0


arr.forEach ((el) => {
    if (el > 250) {
        opa.push(el)
    }
})
opa.forEach ((el) => {
    sum += el
})
console.log(sum, "сумма")
console.log(sum / opa.length, 'среднее арифметическое')
console.log(opa, 'массив')