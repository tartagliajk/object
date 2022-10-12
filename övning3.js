/*
Skapa en klass som representerar en cirkel och kan beräkna area och omkretsen av en cirkel.
*/
var ps = require("prompt-sync");
var prompt = ps();

class Cirkel{
    constructor(r){
        this.radie = r;
    }

    area(){
        return parseInt(3.14 * this.radie * this.radie)
    }

    omkrets(){
        return parseInt(2 * 3.14 * this.radie)
    }
}

var radie = prompt("Skriv radien > ");
var cirkel = new Cirkel(radie);

console.log(radie)
console.log(cirkel.area())
console.log(cirkel.omkrets())