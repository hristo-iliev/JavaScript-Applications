/// <reference path="D:\ПРОГРАМИСТ\JS Applications\Underscore-HM\Underscore-HM\Libs/underscore.js" />
function main() {
    'use strict';

    var students = [
        { fname: "Gosho", lname: "Shishkov" },
        { fname: "Misho", lname: "Driskov" },
        { fname: "Yana", lname: "Chichkova" },
        { fname: "Peter", lname: "Tashov" },
        { fname: "Mira", lname: "Cacheva" },
        { fname: "Ivan", lname: "Ignatov" },
        { fname: "Rali", lname: "Vaneva" },
        { fname: "Bobi", lname: "Zafirov" },
        { fname: "Mincho", lname: "Praznika" },
        { fname: "Galia", lname: "Mladenova" },
    ];

    var filtredStudents = _.filter(students, function (student) {
        return student.fname < student.lname;
    });

    _.each(filtredStudents, function (student) {
        _.extend(student, {
            fullName: function () { return this.fname + " " + this.lname; }
        });
    });

    var reversedByFullName = _.sortBy(filtredStudents, function (st1) {
        return st1.fullName();
    });

    reversedByFullName.reverse();

    // Results on the console
    console.log("All students:");
    console.log(students);
    console.log();
    console.log("Filtred students (first name < last name):");
    console.log(filtredStudents);
    console.log();
    console.log("Sorted by full name - descending:");
    console.log(reversedByFullName);
}