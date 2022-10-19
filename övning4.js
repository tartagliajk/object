/*
Skapa en funktion som sorterar en array av objekt.
*/
var ps = require("prompt-sync");
var prompt = ps();

let cars = [
    {
        "color" : "red",
        "brand" : "bmw",
        "year" : "2020",
    },{
        "color" : "blue",
        "brand" : "audi",
        "year" : "2019",
    },{
        "color" : "black",
        "brand" : "ford",
        "year" : "2010", 
    },{
        "color" : "white",
        "brand" : "tesla",
        "year" : "2019"
    },{
        "color" : "red",
        "brand" : "ferrari",
        "year" : "2016",
    },{
        "color" : "black",
        "brand" : "porsche",
        "year" : "2016"
    }
]

let sortObject = prompt("Write what you you want to find > ");

function sorter(){
    if (sortObject == "color"){
        let colour = prompt("What color? > ").toLowerCase();
        let colorCars = cars.filter(car => car.color === colour);
        console.log(colorCars);

    }if (sortObject == "brand"){
        let brandName = prompt("What brand? > ").toLowerCase();
        let brandCars = cars.filter(car => car.brand === brandName);
        console.log(brandCars);
    }if (sortObject == "year"){
        let years = prompt("What year? > ");
        let yearCars = cars.filter(car => car.year === years);
        console.log(yearCars);
    }
}

sorter();