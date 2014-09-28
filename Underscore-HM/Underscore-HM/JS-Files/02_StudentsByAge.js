/// <reference path="D:\ПРОГРАМИСТ\JS Applications\Underscore-HM\Underscore-HM\Libs/underscore.js" />
function main() {
    'use strict';

    var students = [
        { fname: "Gosho", lname: "Shishkov", age: 20 },
        { fname: "Misho", lname: "Driskov", age: 15 },
        { fname: "Yana", lname: "Chichkova", age: 33 },
        { fname: "Peter", lname: "Tashov", age: 21 },
        { fname: "Mira", lname: "Cacheva", age: 54 },
        { fname: "Ivan", lname: "Ignatov", age: 19 },
        { fname: "Rali", lname: "Vaneva", age: 20 },
        { fname: "Bobi", lname: "Zafirov", age: 25 },
        { fname: "Mincho", lname: "Praznika", age: 26 },
        { fname: "Galia", lname: "Mladenova", age: 18 }
    ];

    var filtredStudents = _.filter(students, function (student) {
        return student.age <= 24 && student.age >= 18;
    });

    _.each(filtredStudents, function (student) {
        _.extend(student, {
            fullName: function () { return this.fname + " " + this.lname; }
        });
    });

    filtredStudents = _.sortBy(filtredStudents, function (st1) {
        return st1.fullName();
    });

    // Results on the console
    console.log("All students:");
    console.log(students);
    console.log();
    console.log("Filtred students by age between: 18 - 24");
    console.log(filtredStudents);
    console.log();
}