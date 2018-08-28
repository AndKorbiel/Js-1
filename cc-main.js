/* basic variables */

let yourChoise;
let board = ["a-1","a-2", 'a-3', 'b-1', 'b-2', 'b-3', 'c-1', 'c-2', 'c-3'];

const a1 = document.getElementById("a-1");
const a2 = document.getElementById("a-2");
const a3 = document.getElementById("a-3");
const b1 = document.getElementById("b-1");
const b2 = document.getElementById("b-2");
const b3 = document.getElementById("b-3");
const c1 = document.getElementById("c-1");
const c2 = document.getElementById("c-2");
const c3 = document.getElementById("c-3");


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
    
    
// main func for X, adding click func and get element ID
document.body.addEventListener("click", function(e) {  

      function myPick() {

      let targ = e.target;  //get what was clicked on
      let id = targ.id;  //grab the id

      // prevent clicking outside of clickable elements
      if (targ.classList.contains('clickable')) {
      
      
          if (targ.classList.contains("taken")) { // prevents overrinding 
          targ = 0;
          myPick();
          }   

          else {

          targ.innerHTML = 'X';   // point X at table cell
          targ.classList.add("taken");

          // idexOf is searching through board array and value and passed to let id which is just a clicked board cells id
          let index = board.indexOf(id);
          
                   /* winning conditionals for player */

                  if ((a1.innerHTML === 'X' && a2.innerHTML === 'X' && a3.innerHTML === 'X') || (b1.innerHTML === 'X' && b2.innerHTML === 'X' && b3.innerHTML === 'X') || (c1.innerHTML === 'X' && c2.innerHTML === 'X' && c3.innerHTML === 'X') || (a1.innerHTML === 'X' && b2.innerHTML === 'X' && c3.innerHTML === 'X') || (a3.innerHTML === 'X' && b2.innerHTML === 'X' && c1.innerHTML === 'X') || (a1.innerHTML === 'X' && b1.innerHTML === 'X' && c1.innerHTML === 'X') || (a2.innerHTML === 'X' && b2.innerHTML === 'X' && c2.innerHTML === 'X') || (a3.innerHTML === 'X' && b3.innerHTML === 'X' && c3.innerHTML === 'X')
    )

                   { 
                      document.getElementById("reset").style.opacity = 1;
                      alert('You win!'); 
                   }

                   else { }

          }
      }
      
      else { 
          targ = 0;
          myPick();
          }
      
      }
      
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
             
                        
                   /* winning conditionals for CPU */

                  if ((a1.innerHTML === 'O' && a2.innerHTML === 'O' && a3.innerHTML === 'O') || (b1.innerHTML === 'O' && b2.innerHTML === 'O' && b3.innerHTML === 'O') || (c1.innerHTML === 'O' && c2.innerHTML === 'O' && c3.innerHTML === 'O') || (a1.innerHTML === 'O' && b2.innerHTML === 'O' && c3.innerHTML === 'O') || (a3.innerHTML === 'O' && b2.innerHTML === 'O' && c1.innerHTML === 'O') || (a1.innerHTML === 'O' && b1.innerHTML === 'O' && c1.innerHTML === 'O') || (a2.innerHTML === 'O' && b2.innerHTML === 'O' && c2.innerHTML === 'O') || (a3.innerHTML === 'O' && b3.innerHTML === 'O' && c3.innerHTML === 'O')
                  )

                  { 
                    document.getElementById("reset").style.opacity = 1;

                    alert('Comp wins!'); 
                  }

                  else { }

             }   
              
             // if picked random fields is taken start function again
             else {
             compPick();
              
             }
       }
       

myPick();
compPick();
    

}, false);

}

