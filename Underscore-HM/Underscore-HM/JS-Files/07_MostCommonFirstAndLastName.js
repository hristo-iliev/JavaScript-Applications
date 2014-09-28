/// <reference path="D:\ПРОГРАМИСТ\JS Applications\Underscore-HM\Underscore-HM\Libs/underscore.js" />
function main() {
    'use strict';

    var people = [
        { fname: "Gosho", lname: "Shishkov" },
        { fname: "Gosho", lname: "Driskov" },
        { fname: "Yana", lname: "Chichkova" },
        { fname: "Peter", lname: "Tashov" },
        { fname: "Mira", lname: "Chichkova" },
        { fname: "Gosho", lname: "Ignatov" },
        { fname: "Rali", lname: "Vaneva" },
        { fname: "Bobi", lname: "Zafirov" },
        { fname: "Mincho", lname: "Praznika" },
        { fname: "Galia", lname: "Mladenova" },
    ];
    
    var mostPopularFirstName = mostCommanName(people, "fname");
    var mostPopularLastName = mostCommanName(people, "lname");

    // Results on the console
    console.log("All people:");
    console.log(people);
    console.log();
    console.log("Most common first name:");
    console.log(mostPopularFirstName.info());
    console.log();
    console.log("Most common last name:");
    console.log(mostPopularLastName.info());
}

function mostCommanName(people, propertie) {
    var counts = {},
        c;
    _.each(people, function (human) {

        if (propertie == "fname") {
            c = human.fname;
        } else {
            c = human.lname;
        }
        
        if (!counts[c]) {
            counts[c] = 0;
        }
        counts[c]++;
        //console.log(counts[c]);
    });
    var mostPopularName;
    var count = 0;

    _.map(counts, function (people, human) {
        if (people > count) {
            mostPopularName = {
                name: human,
                count: people,
                info: function () { return "name: " + this.name + "  count: " + this.count;}
            };
            count = people;
        }
    });

    return mostPopularName;
}