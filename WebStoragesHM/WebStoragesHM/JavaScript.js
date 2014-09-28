function main() {
    document.querySelector("tbody.great").innerHTML = "";
    var a = randomNum();
    var b = randomNum();
    var c = randomNum();
    var d = randomNum();
    var turn = 1;
    var score = 100;
    //Show the combination:
    //document.getElementById("wrapper").innerHTML += " " + a + b + c + d;
    var secret = [a, b, c, d];

    document.getElementById('one').onkeyup = function () {
        this.disabled = true;
    };
    document.getElementById('two').onkeyup = function () {
        this.disabled = true;
    };
    document.getElementById('three').onkeyup = function () {
        this.disabled = true;
    };
    document.getElementById('four').onkeyup = function () {
        this.disabled = true;
    };

    document.getElementsByTagName("html").onkeypress = function (e) {
        if(window.event.keyCode == 13)
        {
            alert("you hit return!");
        }
    };
    document.getElementById('submit').onclick = function () {
        var a = document.getElementById('one').value;
        var b = document.getElementById('two').value;
        var c = document.getElementById('three').value;
        var d = document.getElementById('four').value;

        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
            alert("You Must Enter 4 Digits");

            document.getElementById('one').disabled = false;
            document.getElementById('one').value = "";
            document.getElementById('two').disabled = false;
            document.getElementById('two').value = "";
            document.getElementById('three').disabled = false;
            document.getElementById('three').value = "";
            document.getElementById('four').disabled = false;
            document.getElementById('four').value = "";
            return;
        }

        if (a === "" || b === "" || c === "" || d === "") {
            alert("You Must Enter 4 Digits");

            document.getElementById('one').disabled = false;
            document.getElementById('one').value = "";
            document.getElementById('two').disabled = false;
            document.getElementById('two').value = "";
            document.getElementById('three').disabled = false;
            document.getElementById('three').value = "";
            document.getElementById('four').disabled = false;
            document.getElementById('four').value = "";
            return;
        }

        var userCombo = [a, b, c, d];

        var secretCopy = secret.slice();
        var bulls = 0;
        var cows = 0;

        for (var o = 0; o < 4; o++) {
            if (userCombo[o] == secretCopy[o]) {
                bulls++;
                secretCopy[o] = "x";
                userCombo[o] = "o";
                continue;
            }
        }

        for (var i = 0; i < 4; i++) {           

            for (var j = 0; j < 4; j++) {
                if (userCombo[i] == secretCopy[j]) {
                    cows++;
                    secretCopy[j] = "x";
                    break;
                }
            }
        }
        
        var userGuess = document.createElement("tr");
        var block = document.createElement("td");        

        setScore(bulls, cows, [a,b,c,d], turn, score);
        turn++;
        score -= 5;
    };
}

function randomNum() {
    return Math.floor(Math.random() * 10);
}

function setScore(bulls, cows, userCombo, turn, score) {
    
    var userGuess = document.createElement("tr");
    var block = document.createElement("td");
    var head = document.createElement("th");
    head.classList.add("turn");
    head.setAttribute("colspan", "4");
    head.innerHTML = "Turn #" + turn;
    
    var userGu = document.createElement("tr");
    userGu.onclick = function () {
        var first = this.nextElementSibling;
        var second = first.nextElementSibling;

        if (first.classList.contains("hide")) {
            first.classList.remove("hide");
            second.classList.remove("hide");
        } else {
            first.classList.add("hide");
            second.classList.add("hide");
        }
    };
    userGu.appendChild(head);
    document.querySelector("tbody.great").appendChild(userGu);

    for (var i = 0; i < 4; i++) {
        block = block.cloneNode(true);
        block.innerHTML = userCombo[i];
        userGuess.appendChild(block);
    }

    document.querySelector("tbody.great").appendChild(userGuess);

    var result = document.createElement("tr");
    var count = 4 - (bulls + cows);

    for (var j = 0; j < bulls; j++) {
        block = block.cloneNode(true);
        block.innerHTML = "&#9787;";
        block.style.backgroundColor = "chartreuse";
        result.appendChild(block);
    }

    for (var k = 0; k < cows; k++) {
        block = block.cloneNode(true);
        block.innerHTML = "&#9786;";
        block.style.backgroundColor = "goldenrod";
        result.appendChild(block);
    }

    for (var l = 0; l < count; l++) {
        block = block.cloneNode(true);
        block.innerHTML = "&#9785;";
        block.style.backgroundColor = "firebrick";
        result.appendChild(block);
    }

    document.querySelector("tbody.great").appendChild(result);

    document.getElementById('one').disabled = false;
    document.getElementById('one').value = "";
    document.getElementById('two').disabled = false;
    document.getElementById('two').value = "";
    document.getElementById('three').disabled = false;
    document.getElementById('three').value = "";
    document.getElementById('four').disabled = false;
    document.getElementById('four').value = "";
    
    if (bulls == 4) {
        alert("CONGRATULATIONS!!! YOU WON THE GAME!!!");
        gameOver(score);
    }
}

function gameOver(score) {
    var local = document.getElementById("local");
    local.classList.remove("hide");
    document.getElementById("value-text").value = score;
    var wrap = document.getElementById("wrapper");    
}

function loadPairs() {
    document.getElementById("high").innerHTML = "";
    var arr = [];
    for (var j = 0; j < localStorage.length; j++) {
        var key = localStorage.key(j);
        var value = localStorage.getItem(key);
        arr.push({ key: key, value: parseInt(value)});
    }
    arr = arr.sort(function (a, b) { return b.value - a.value; });
    for (var i = 0; i < arr.length; i++) {
        var resultHTML = "<tr>";
        resultHTML +=
        '<td>' + arr[i].key + '</td>' + '<td>' + arr[i].value + '</td>';

        resultHTML += "</tr>";
        document.getElementById("high").innerHTML += resultHTML;
    }
    
    document.getElementById("tb-key").value = "";
    local.classList.add("hide");
    
    main();
    
}

function onSaveButtonClick() {
    var key = document.getElementById("tb-key").value;
    var value = document.getElementById("value-text").value;
    localStorage.setItem(key, value);
    loadPairs();
}

function onLoadButtonClick() {
    var key = document.getElementById("tb-key").value;
    document.getElementById("value-text").value = localStorage.getItem(key);
}

function onRemoveButtonClick() {
    var key = document.getElementById("tb-key").value;
    localStorage.removeItem(key);
    loadPairs();
}

function onClearStorageButtonClick() {
    localStorage.clear();
    loadPairs();
}
