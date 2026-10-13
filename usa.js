const income = 230000
const creditScore = 700
const hasCoSigner = false

if (income >= 50000 && creditScore >= 500) {
    if (creditScore>=700 || hasCoSigner == true) {
        console.log("одобренно")
    }
}
else  {
    console.log("отказанно") 
}