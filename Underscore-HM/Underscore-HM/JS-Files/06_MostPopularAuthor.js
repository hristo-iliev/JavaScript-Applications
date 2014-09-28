/// <reference path="D:\ПРОГРАМИСТ\JS Applications\Underscore-HM\Underscore-HM\Libs/underscore.js" />
function main() {
    //'use strict';

    var books = [
        { title: "Guards! Guards!", author: "Terry Pratchett" },
        { title: "Ace High", author: "Robert E. Howard" },
        { title: "Actor, The", author: "Robert E. Howard" },
        { title: "Night Watch", author: "Terry Pratchett" },
        { title: "Altars and Jesters", author: "Robert E. Howard" },
        { title: "Lord Of The Rings", author: "J. R. R. Tolkien" },
        { title: "Wintersmith", author: "Terry Pratchett" },
        { title: "Hobbit", author: "J. R. R. Tolkien" },
        { title: "Harry Potter and the Order of the Phoenix", author: "J. K. Rowling" },
        { title: "Batter the Bars", author: "Robert E. Howard" },
        { title: "Dreaming in Israel", author: "Robert E. Howard" },
    ];
    
    var authors = {};
    _.each(books, function (book) {

        var c = book.author;
        if (!authors[c]) {
            authors[c] = 0;
        }
        authors[c]++;
        //console.log(authors[c]);
    });
    var mostPopularAuthor;
    var count = 0;

    _.map(authors, function (books, author) {
        if (books > count) {
            mostPopularAuthor = {
                author: author,
                numberOfBooks: books
            };
            count = books;
        } 
    });

    // Results on the console
    console.log("All books:");
    console.log(books);
    console.log();
    console.log("Authors -> Count");
    console.log(authors);
    console.log();
    console.log("Most popular author:");
    console.log(mostPopularAuthor);
    console.log();
}