let yourChoise,
    compChoise,
    yourSign = 'O',
    compSign = 'X';
const board = ["a1","a2", 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

const boardTds = board.map(function(y) {
    return document.getElementById(y);
});

function endGameAlert(winner) {
    document.getElementById("reset").style.opacity = 1;
    alert(winner +' win!');
    boardTds.forEach(function(x) {
        x.classList.add("taken");
    })
}

function symbolSelection(playerChoise, otherSign) {
    document.getElementById(otherSign).style.display = "none";
    document.getElementById("info").innerHTML = `You've choosed Your destiny.`;
    yourChoise = playerChoise;
    compChoise = otherSign;

    if (yourChoise === 'cross') {
        yourSign = 'X';
        compSign = 'O'
    }

    setInterval(function () {
        document.getElementById("choose").style.opacity = 0;
    }, 1500);

    setInterval(function () {
        document.getElementById("table").style.opacity = 1;
    }, 1500);
}

function winningConditionChecker(e, currentPlayer) {
    let checkedSymbol,
        winner,
        nextPlayer;

    if (currentPlayer === 'player') {
        checkedSymbol = yourChoise;
        winner = 'You';
        nextPlayer = 'Comp'
    } else {
        checkedSymbol = compChoise;
        winner = 'Comp';
        nextPlayer = 'player'
    }

    if (
        (a1.classList.contains(checkedSymbol) && a2.classList.contains(checkedSymbol) && a3.classList.contains(checkedSymbol))
        || (b1.classList.contains(checkedSymbol) && b2.classList.contains(checkedSymbol) && b3.classList.contains(checkedSymbol))
        || (c1.classList.contains(checkedSymbol) && c2.classList.contains(checkedSymbol) && c3.classList.contains(checkedSymbol))
        || (a1.classList.contains(checkedSymbol) && b2.classList.contains(checkedSymbol) && c3.classList.contains(checkedSymbol))
        || (a3.classList.contains(checkedSymbol) && b2.classList.contains(checkedSymbol) && c1.classList.contains(checkedSymbol))
        || (a1.classList.contains(checkedSymbol) && b1.classList.contains(checkedSymbol) && c1.classList.contains(checkedSymbol))
        || (a2.classList.contains(checkedSymbol) && b2.classList.contains(checkedSymbol) && c2.classList.contains(checkedSymbol))
        || (a3.classList.contains(checkedSymbol) && b3.classList.contains(checkedSymbol) && c3.classList.contains(checkedSymbol))
    ) {
        endGameAlert(winner)
    } else if (boardTds.every(element => element.classList.contains('taken')) ) {
        document.getElementById("reset").style.opacity = 1;
        alert('Tie!');
    } else {
        nextMove(e, nextPlayer);
    }
}

function nextMove(e, user) {
    if (user === 'player') {
        let targ = e.target;

        if (targ.classList.contains('clickable')) {

            if (targ.classList.contains("taken")) {
                targ = null;
            } else {
                targ.innerHTML = yourSign;
                targ.classList.add(yourChoise, "taken");
                winningConditionChecker(e, user);
            }
        }
    } else {
        let rand = board[Math.floor(Math.random() * board.length)];
        let index = board.indexOf(rand);

        if (!(document.getElementById(rand).classList.contains("taken"))) {

            document.getElementById(rand).innerHTML = compSign;
            document.getElementById(rand).classList.add(compChoise, "taken");
            winningConditionChecker(e, user);

            if (index !== -1) board.splice(index, 1);
            nextMove(e, 'player');
        } else {
            nextMove(e, 'Comp');
        }
    }
}

document.getElementById("cross").addEventListener('click', function() {
    symbolSelection('cross', 'circle');
});

document.getElementById("circle").addEventListener('click', function() {
    symbolSelection('circle', 'cross');
});

document.body.addEventListener("click", function(e) {
    nextMove(e, 'player')
});
