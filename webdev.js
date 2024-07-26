var currTurn = 0;
var gamePieces = ["X", "O"];

//document.getElementById("lol").innerText += gamePieces[currTurn];

updatePlayer();

document.getElementById("1").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("1").value == "") {
        document.getElementById("1").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("1").value == "") {
        document.getElementById("1").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("2").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("2").value == "") {
        document.getElementById("2").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("2").value == "") {
        document.getElementById("2").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("3").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("3").value == "") {
        document.getElementById("3").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("3").value == "") {
        document.getElementById("3").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("4").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("4").value == "") {
        document.getElementById("4").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("4").value == "") {
        document.getElementById("4").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("5").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("5").value == "") {
        document.getElementById("5").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("5").value == "") {
        document.getElementById("5").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("6").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("6").value == "") {
        document.getElementById("6").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("6").value == "") {
        document.getElementById("6").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("7").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("7").value == "") {
        document.getElementById("7").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("7").value == "") {
        document.getElementById("7").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("8").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("8").value == "") {
        document.getElementById("8").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("8").value == "") {
        document.getElementById("8").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
    
});

document.getElementById("9").addEventListener("click", function() {
    if ((currTurn % 2 == 0) && document.getElementById("9").value == "") {
        document.getElementById("9").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    } else if ((currTurn % 2 == 1) && document.getElementById("9").value == "") {
        document.getElementById("9").value = gamePieces[currTurn%2];
        currTurn += 1;
        callCommands();
    }
   
});

function updatePlayer() {
    if (currTurn % 2 == 0) {
        document.getElementById("gameStatus").innerHTML = "<b><u>" + gamePieces[currTurn%2] + "</u>'s Turn!</b>";
    } else {
        document.getElementById("gameStatus").innerHTML = "<b><u>" + gamePieces[currTurn%2] + "</u>'s Turn!</b>";
    }
}

function checkWin() {
    if ((document.getElementById("1").value == document.getElementById("2").value) && (document.getElementById("2").value == document.getElementById("3").value) && (document.getElementById("3").value != "") && (document.getElementById("2").value != "") && (document.getElementById("1").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("1").value + " WINS!!</b>";
        document.getElementById("1").style.backgroundColor = "red";
        document.getElementById("2").style.backgroundColor = "red";
        document.getElementById("3").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("4").value == document.getElementById("5").value) && (document.getElementById("5").value == document.getElementById("6").value) && (document.getElementById("6").value != "") && (document.getElementById("5").value != "") && (document.getElementById("4").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("4").value + " WINS!!</b>";
        document.getElementById("4").style.backgroundColor = "red";
        document.getElementById("5").style.backgroundColor = "red";
        document.getElementById("6").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("7").value == document.getElementById("8").value) && (document.getElementById("8").value == document.getElementById("9").value) && (document.getElementById("9").value != "") && (document.getElementById("8").value != "") && (document.getElementById("7").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("7").value + " WINS!!</b>";
        document.getElementById("7").style.backgroundColor = "red";
        document.getElementById("8").style.backgroundColor = "red";
        document.getElementById("9").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("5").value == document.getElementById("2").value) && (document.getElementById("2").value == document.getElementById("8").value) && (document.getElementById("8").value != "") && (document.getElementById("2").value != "") && (document.getElementById("5").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("2").value + " WINS!!</b>";
        document.getElementById("5").style.backgroundColor = "red";
        document.getElementById("2").style.backgroundColor = "red";
        document.getElementById("8").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("1").value == document.getElementById("4").value) && (document.getElementById("4").value == document.getElementById("7").value) && (document.getElementById("7").value != "") && (document.getElementById("4").value != "") && (document.getElementById("1").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("1").value + " WINS!!</b>";
        document.getElementById("1").style.backgroundColor = "red";
        document.getElementById("4").style.backgroundColor = "red";
        document.getElementById("7").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("3").value == document.getElementById("6").value) && (document.getElementById("6").value == document.getElementById("9").value) && (document.getElementById("9").value != "") && (document.getElementById("6").value != "") && (document.getElementById("3").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("3").value + " WINS!!</b>";
        document.getElementById("6").style.backgroundColor = "red";
        document.getElementById("9").style.backgroundColor = "red";
        document.getElementById("3").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("1").value == document.getElementById("5").value) && (document.getElementById("5").value == document.getElementById("9").value) && (document.getElementById("9").value != "") && (document.getElementById("5").value != "") && (document.getElementById("1").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("1").value + " WINS!!</b>";
        document.getElementById("1").style.backgroundColor = "red";
        document.getElementById("5").style.backgroundColor = "red";
        document.getElementById("9").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("7").value == document.getElementById("5").value) && (document.getElementById("5").value == document.getElementById("3").value) && (document.getElementById("3").value != "") && (document.getElementById("5").value != "") && (document.getElementById("7").value != "")) {
        document.getElementById("gameText").innerHTML = "<b>" + document.getElementById("7").value + " WINS!!</b>";
        document.getElementById("7").style.backgroundColor = "red";
        document.getElementById("5").style.backgroundColor = "red";
        document.getElementById("3").style.backgroundColor = "red";
        document.getElementById("gameStatus").innerHTML = "";
        document.getElementById("reset").removeAttribute("hidden");
    } else if ((document.getElementById("1").value == "O" && document.getElementById("3").value == "O") && document.getElementById("4").value == "X" && document.getElementById("6").value == "X" && document.getElementById("8").value == "X") {
        alert("...");
        alert("how did you get here...")
        alert("it's not too late to turn back now...")
        alert("...")
        document.getElementById("luddy").remove();
        for (let i = 1; i <= 9; i++) {
            document.getElementById(String(i)).style.color = "red";
            document.getElementById(String(i)).style.backgroundColor = "black";
        }
        document.body.style.backgroundColor = "maroon";
        document.getElementById("header").innerHTML = "<u>Tic-Tac-Toe?</u>";
        document.title = "Tic-Tac-Toe Game..."
        
        //resetGame();
    } else {
        var allFilled = true;
        for (let i = 1; i <= 9; i++) {
            if (document.getElementById(String(i)).value == "") {
                allFilled = false;
            }
        }

        if (allFilled) {
            document.getElementById("gameText").innerHTML = "<b>TIE!!</b>";
            document.getElementById("gameStatus").innerHTML = "";
            document.getElementById("reset").removeAttribute("hidden");
        }

    }
}

function callCommands() {
    updatePlayer();
    checkWin();
}

function resetGame() {
    location.reload();
}