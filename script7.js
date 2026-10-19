const you = [1, 2, 3, 4, 5]
const arr2 = []
const arr3 = []

you.forEach ((el) => {
    arr2.push(el ** 2)
})

arr2.forEach ((el) => {
    arr3.push(el / 2)
})
console.log(arr2)
console.log(arr3)
