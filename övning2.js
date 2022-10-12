/* 
Skapa ett program som tar bort “year” egenskapen från car objektet. Tips: använd delete
*/

const car = {
    brand: "Volvo",
    model: "V60",
    year: "2021"
}

console.log(car.year)

delete car.year

console.log(car.year)