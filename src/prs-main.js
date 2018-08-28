let yourChoose = '';
let compChoose = ['paper', 'rock', 'scissors'];
let yourPoints = 0;
let compPoints = 0;


const res = document.getElementById("result");
const compRes = document.getElementById("comp-result");
const win = document.getElementById("win");
const score = document.getElementById("your-points");
const compScore = document.getElementById("comp-points");


// paper control script
document.getElementById("paper").onclick = function() {
yourChoose = 'paper';
document.getElementById("rees").style.display = "block";
res.innerHTML = `Your choose: ${yourChoose}`;
let x = Math.floor(Math.random() * 3);
instantChoose = compChoose[x];
compRes.innerHTML = `Computer choose: ${instantChoose}`;

	if (instantChoose === 'paper') {
   win.innerHTML = `Result: TIE`;
   score.innerHTML = `Your score: ${yourPoints}`;
   compScore.innerHTML = `Comp score: ${compPoints}`;
  }
  else if (instantChoose === 'rock') { 
   ++yourPoints;
   win.innerHTML = `Result: YOU WIN`;
    score.innerHTML = `Your score: ${yourPoints}`;
    compScore.innerHTML = `Comp score: ${compPoints}`;
  }
  else {
  ++compPoints;
  win.innerHTML = `Result: COMP WINS`;
  score.innerHTML = `Your score: ${yourPoints}`;
  compScore.innerHTML = `Comp score: ${compPoints}`;
  }
};

document.getElementById("rock").onclick = function() {
yourChoose = 'rock';
document.getElementById("rees").style.display = "block";
res.innerHTML = `Your choose: ${yourChoose}`;
let x = Math.floor(Math.random() * 3);
instantChoose = compChoose[x];
compRes.innerHTML = `Computer choose: ${instantChoose}`;

	if (instantChoose === 'paper') {
    ++compPoints;
    win.innerHTML = `Result: COMP WINS`;
    score.innerHTML = `Your score: ${yourPoints}`;
    compScore.innerHTML = `Comp score: ${compPoints}`;
  }
  else if (instantChoose === 'rock') { 
     win.innerHTML = `Result: TIE`;
     score.innerHTML = `Your score: ${yourPoints}`;
     compScore.innerHTML = `Comp score: ${compPoints}`;
  }
  else {
     ++yourPoints;
     win.innerHTML = `Result: YOU WIN`;
     score.innerHTML = `Your score: ${yourPoints}`;
     compScore.innerHTML = `Comp score: ${compPoints}`;
  }
};

document.getElementById("scissors").onclick = function() {
yourChoose = 'scissors';
document.getElementById("rees").style.display = "block";
res.innerHTML = `Your choose: ${yourChoose}`;
let x = Math.floor(Math.random() * 3);
instantChoose = compChoose[x];
compRes.innerHTML = `Computer choose: ${instantChoose}`;

	if (instantChoose === 'paper') {
    ++yourPoints;
    win.innerHTML = `Result: YOU WIN`;
    score.innerHTML = `Your score: ${yourPoints}`;
    compScore.innerHTML = `Comp score: ${compPoints}`;
  }
  else if (instantChoose === 'rock') { 
    ++compPoints;
    win.innerHTML = `Result: COMP WINS`;
    score.innerHTML = `Your score: ${yourPoints}`;
    compScore.innerHTML = `Comp score: ${compPoints}`;
  }
  else {
     win.innerHTML = `Result: TIE`;
     score.innerHTML = `Your score: ${yourPoints}`;
     compScore.innerHTML = `Comp score: ${compPoints}`;
  }
};