/* basic variables */

let yourChoise;
const board = ["a1","a2", 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

/* Create new array with targeted DOM elements based on board array elements ids */
const boardTds = board.map(function(y) {
   return y = document.getElementById(y);
})

/*  main game functionality */

//  pre game choose for X
document.getElementById("cross").onclick = function() {

// hiding intro headline and displaying table
document.getElementById("circle").style.display = "none";
document.getElementById("info").innerHTML = `You've choosed Your destiny.`;
yourChoise = 'cross';

// animation time
  setInterval(function(){ 
    document.getElementById("choose").style.opacity = 0; 
    }, 1500);

  setInterval(function(){ 
    document.getElementById("table").style.opacity = 1; 
    }, 1500);

}    
    
// main func for X, adding click func and get element ID
document.body.addEventListener("click", function(e) {  

     let targ = e.target;  //get what was clicked on
     let id = targ.id;  //grab the id
     let index = board.indexOf(id); // idexOf is searching through board array and value and passed to let id which is just a clicked board cells id
     
     console.log(targ);
     console.log(id);

     if (targ.classList.contains('clickable')) {

          if (targ.classList.contains("taken")) { // prevents overrinding 
            console.log('taken');
            targ = null;
          }   

          else {  
            console.log('clickable');
            targ.innerHTML = 'X';   // point X at table cell
            targ.classList.add("taken");

              // winning conditionals for player
              if ((a1.innerHTML === 'X' && a2.innerHTML === 'X' && a3.innerHTML === 'X') || (b1.innerHTML === 'X' && b2.innerHTML === 'X' && b3.innerHTML === 'X') || (c1.innerHTML === 'X' && c2.innerHTML === 'X' && c3.innerHTML === 'X') || (a1.innerHTML === 'X' && b2.innerHTML === 'X' && c3.innerHTML === 'X') || (a3.innerHTML === 'X' && b2.innerHTML === 'X' && c1.innerHTML === 'X') || (a1.innerHTML === 'X' && b1.innerHTML === 'X' && c1.innerHTML === 'X') || (a2.innerHTML === 'X' && b2.innerHTML === 'X' && c2.innerHTML === 'X') || (a3.innerHTML === 'X' && b3.innerHTML === 'X' && c3.innerHTML === 'X')
              )

                   { 
                      document.getElementById("reset").style.opacity = 1;
                      alert('You win!'); 
                      boardTds.forEach(function(x) {
                        x.classList.add("taken");
                      }) 
                   }

              // check if every piece of board is taken 
              else if (boardTds.every(element => element.classList.contains('taken')) ) {
                  document.getElementById("reset").style.opacity = 1;
                  alert('Tie!');
              }

              else {
              compPick();
              }

          }

     } 

     else { }

     function compPick() {
          // pick up random elment from array
          let rand = board[Math.floor(Math.random() * board.length)];
             
             // check if fiels isn't already taken 
             if (!(document.getElementById(rand).classList.contains("taken"))) { 
             
                 document.getElementById(rand).innerHTML = 'O';
                 document.getElementById(rand).classList.add("taken");

                 // reasigning index value to new ID and than remove it
                 index = board.indexOf(rand);
                  
                 // if array is not empty  
                 if (index !== -1) board.splice(index, 1);
                        
                      // winning conditionals for CPU 
                      if ((a1.innerHTML === 'O' && a2.innerHTML === 'O' && a3.innerHTML === 'O') || (b1.innerHTML === 'O' && b2.innerHTML === 'O' && b3.innerHTML === 'O') || (c1.innerHTML === 'O' && c2.innerHTML === 'O' && c3.innerHTML === 'O') || (a1.innerHTML === 'O' && b2.innerHTML === 'O' && c3.innerHTML === 'O') || (a3.innerHTML === 'O' && b2.innerHTML === 'O' && c1.innerHTML === 'O') || (a1.innerHTML === 'O' && b1.innerHTML === 'O' && c1.innerHTML === 'O') || (a2.innerHTML === 'O' && b2.innerHTML === 'O' && c2.innerHTML === 'O') || (a3.innerHTML === 'O' && b3.innerHTML === 'O' && c3.innerHTML === 'O')
                      )

                      { 
                        document.getElementById("reset").style.opacity = 1;
                        alert('Comp wins!'); 
                        boardTds.forEach(function(x) {
                            x.classList.add("taken");
                        }) 
                      }

                 else { }

                 }   
              
             // if picked random fields is taken start function again
             else {
                compPick(); 
             }
       } 
});  
