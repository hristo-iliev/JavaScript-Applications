/// <reference path="D:\ПРОГРАМИСТ\JS Applications\Underscore-HM\Underscore-HM\Libs/underscore.js" />
function main() {
    'use strict';

    var animals = [
        { species: "Mammal", type: "Dog", legs: 4 },
        { species: "Mammal", type: "Dolphin", legs: 0 },
        { species: "Mammal", type: "Cat", legs: 4 },
        { species: "Insect", type: "Centipede", legs: 100 },
        { species: "Bird", type: "Parrot", legs: 2 },
        { species: "Insect", type: "Spider", legs: 8 },
        { species: "Insect", type: "Fly", legs: 6 },
        { species: "Reptile", type: "Snake", legs: 0 },
        { species: "Reptile", type: "Turtle", legs: 4 },
        { species: "Reptile", type: "Crocodile", legs: 4 },
    ];
    var groupedAnimals = _.sortBy(animals, function (animal) {
            return animal.legs;        
    });
    groupedAnimals = _.groupBy(groupedAnimals, 'species');    

    // Results on the console
    console.log("All animals:");
    console.log(animals);
    console.log();
    console.log("By species and by legs:");
    console.log(groupedAnimals);
    console.log();
}