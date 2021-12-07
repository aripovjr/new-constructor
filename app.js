//Function constructor is a new function object calling the constructor directly can create functions dynamically//
//here we have car function constructor with three parameters
function car(name, year, model){
    this.name=name
    this.year=year
    this.model=model
    this.fullinfo = function(){
        console.log(`My car is ${name}, ${model}, ${year}`)
    }
    
}

const BMW = new car('BMW', 2019, 'M5 f90')
BMW.fullinfo()

const Mazda = new car('Mazda', 2017, '6 Seria')
Mazda.fullinfo()

const bmw = new car('bmw', 2016 ,'7 Series')
//console.log(`I've got a new car in my garage and it is ${bmw.name}, ${bmw.model} and year of ${bmw.year}`)
bmw.fullinfo()

const mercedes = new car('Mercedes-Benz', 2020, 'AMG G-63')
mercedes.fullinfo()
