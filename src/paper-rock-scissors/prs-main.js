let yourChoose = '';
let compChoose = ['paper', 'rock', 'scissors'];
let yourPoints = 0;
let compPoints = 0;

const res = document.getElementById("result");
const compRes = document.getElementById("comp-result");
const win = document.getElementById("win");
const score = document.getElementById("your-points");
const compScore = document.getElementById("comp-points");
const controllers = document.querySelectorAll('.controller');

function showResults(winMessage) {
    win.innerHTML = `Result: ${winMessage}`;
    score.innerHTML = `Your score: ${yourPoints}`;
    compScore.innerHTML = `Comp score: ${compPoints}`;
}

function compChoise(yourChoose) {
    let randomPick = Math.floor(Math.random() * 3);
    let instantChoose = compChoose[randomPick];
    compRes.innerHTML = `Computer choose: ${instantChoose}`;

    if (instantChoose === 'paper') {
        if (yourChoose === 'paper') {
            showResults('TIE');
        } else if (yourChoose === 'rock') {
            ++compPoints;
            showResults('COMP WINS');
        } else {
            ++yourPoints;
            showResults('YOU WIN');
        }
    }
    else if (instantChoose === 'rock') {
        if (yourChoose === 'paper') {
            ++yourPoints;
            showResults('YOU WIN');
        } else if (yourChoose === 'rock') {
            showResults('TIE');
        } else {
            ++compPoints;
            showResults('COMP WINS');
        }
    }
    else {
        if (yourChoose === 'paper') {
            ++compPoints;
            showResults('COMP WINS');
        } else if (yourChoose === 'rock') {
            ++yourPoints;
            showResults('YOU WIN');
        } else {
            ++compPoints;
            showResults('TIE');
        }
    }
}

controllers.forEach(function(element) {
    element.addEventListener('click', function(e) {

        yourChoose = e.target.id;
        document.getElementById("rees").style.display = "block";
        res.innerHTML = `Your choose: ${yourChoose}`;
        compChoise(yourChoose);
    });
});
