/// <reference path="D:\ПРОГРАМИСТ\JS Applications\Underscore-HM\Underscore-HM\Libs/underscore.js" />
function main() {
    'use strict';

    var students = [
        { fname: "Gosho", lname: "Shishkov", mark: 80 },
        { fname: "Misho", lname: "Driskov", mark: 88.5 },
        { fname: "Yana", lname: "Chichkova", mark: 87 },
        { fname: "Peter", lname: "Tashov", mark: 93.5 },
        { fname: "Mira", lname: "Cacheva", mark: 94 },
        { fname: "Ivan", lname: "Ignatov", mark: 93 },
        { fname: "Rali", lname: "Vaneva", mark: 90.5 },
        { fname: "Bobi", lname: "Zafirov", mark: 86 },
        { fname: "Mincho", lname: "Praznika", mark: 86.5 },
        { fname: "Galia", lname: "Mladenova", mark: 81 }
    ];

    var filtredStudents = _.clone(students);

    _.each(filtredStudents, function (student) {
        _.extend(student, {
            fullName: function () { return this.fname + " " + this.lname; }
        });
    });

    filtredStudents = _.sortBy(filtredStudents, function (st1) {
        return st1.mark * -1;
    });

    // Results on the console
    console.log("All students:");
    console.log(students);
    console.log();
    console.log("Top-scored student:");
    console.log("Student: " + filtredStudents[0].fullName() + ", Mark: " + filtredStudents[0].mark);
    console.log();
}