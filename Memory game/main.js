$(document).ready(function() {

  // generate random board
  let cards = ['<i class="fas fa-anchor"></i>', '<i class="fas fa-anchor"></i>', '<i class="fas fa-bell"></i>', '<i class="fas fa-bell"></i>', '<i class="fas fa-bomb"></i>', '<i class="fas fa-bomb"></i>', '<i class="fas fa-camera"></i>', '<i class="fas fa-camera"></i>', '<i class="fas fa-cog"></i>', '<i class="fas fa-cog"></i>', '<i class="fas fa-dice"></i>', '<i class="fas fa-dice"></i>', '<i class="far fa-eye"></i>', '<i class="far fa-eye"></i>','<i class="fas fa-fighter-jet"></i>', '<i class="fas fa-fighter-jet"></i>', '<i class="far fa-gem"></i>', '<i class="far fa-gem"></i>'];
  
  // shuffle elements in arrray without repetation
  function shuffle(cards) {
  var m = cards.length, t, i;
  while (m > 0)   {
  i = Math.floor(Math.random() * m--);
  t = cards[m];
  cards[m] = cards[i];
  cards[i] = t;
  }
  return cards;
  }

  shuffle(cards); 

  // put shuffled elements from array on board
  function randomCards() {
    let elements = '';
    for (let n = 0; n < cards.length; n++) {
 
      elements += `<div id="${n}" class="square" value='${cards[n]}'>${cards[n]}</div>` // add new element with specify id and value
      
    }
    $('#table').html(elements);
  }
  
  randomCards();
  
  // main function - cards comparing
  let compare = [];
  let saved = [];
  let score_1 = 0;
  let score_2 = 0;
  
  $('.square').click(function() {
  
    // hide cards that wasn't matched
    $('.square').removeClass('show');

    // show clicked cards
    $(this).toggleClass('show check flipInY');

    // push clicked cards into array to compare them
    compare.push(($(this).attr('value')));
    saved.push(($(this).attr('id')));

    // on first click
    if (compare.length < 2) { } 
    
    // on second click
    else if (compare.length == 2) {

      // get cards ID
      let a = document.getElementById(saved[0]);
      let b = document.getElementById(saved[1]);

      // check if IDs matched and if isn't same card clicked 2 times
      if ((compare[0] === compare[1]) && (a != b)) {

        // add saved class to elements to prevent them from hiding
        $(a).addClass('saved');
        $(b).addClass('saved');
        // clear both arrays
        compare = [];
        saved = [];
        // add 1 to score
        score_1++;
        $('#score-1').html(`Pairs find out: ${score_1}`);

        if (score_1 == 10) { 
          alert('End of the game'); 
          document.getElementById("reset").style.display = "block";
        };

      } else {
        // clear both arrays
        compare = [];
        saved = [];
        // add 1 to missed clicks
        score_2++;
        $('#score-2').html(`Missed clicks: ${score_2}`);
        
      }


    } else {
      
    }

  })

});