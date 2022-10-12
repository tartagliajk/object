/*
Skapa en funktion som listar ett objekts egenskaper. Tips: använd Object.keys Exempel:

var car = {
	brand: “Volvo”,
	model: “V60”,
	year: “2021”
}
Output: [“brand”, “model”, “year”]
*/

const car = {
    brand: "Volvo",
    model: "V60",
    year: "2021"
}

Object.keys(car).forEach((prop)=> console.log(prop));