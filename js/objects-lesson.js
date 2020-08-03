"use strict";

//creating an object
var person = new Object();

person.firstName = "Amanda";
person.lastName = "Garrison";
person["age"] = 32;

person.saysHello = function(){
    return this.firstName + " says Hello!";
}
var car = {
    make: "Lexus",
    model: "RX350",
    color: "silver",
    year: "old",
    owner: {
        firstName: "Amanda",
        lastName: "Garrison",
        age: 32
    },
    features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    honk: function(){
        //console.log("Honk! Honk!");
        //return "Honk! Honk!";
      //  return this.make + " " this.model + "says Honk! Honk!";
    }
}
//{} = object literal
//nested object of owner inside of the car object

console.log(person);
console.log(car);
//accessing data within an object
console.log(person.firstName + " " + person.lastName + " is " + person["age"] + " years old.");

//accessing data within a nested object
console.log(car.owner.firstName + " drives a " + car.make + " " +car.model);

console.log("Her car has the following features: ")
car.features.forEach(function(feature){
    console.log(feature)
})

console.log(car.honk());
console.log(person.saysHello())