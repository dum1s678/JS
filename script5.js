let basePrice = 500
const age = 17
const isWeekend = true
const isEvening = true
let hasStudentCard = true
let discount = 0
if (age <50 && age >5){
    if (age < 16 || age > 25){ 
        hasStudentCard = false
    }
    console.log(basePrice)
    if (isWeekend){
        discount = discount + 15
    }
    console.log(basePrice)
    if (isEvening){
        discount = discount + 10
    }
    console.log(basePrice)
    if (hasStudentCard == true && isWeekend == false){
        basePrice = (basePrice/100 * (100+discount)) * 0.85
        discount = 0
    }
    console.log(basePrice)
    if (age<12){
        basePrice = (basePrice/100 * (100+discount)) * 0.5
        discount = 0
    }
    console.log(basePrice)
    console.log(basePrice/100 * (100+discount))
}
else{
    console.log("по возрасту нельзя")
}