$(document).ready(function() {

    let passwords = ['Gdzie dwóch się bije tam trzeci korzysta'];
    let firstToShow = ['a', 'e', 'i', 'o'];
    let random = Math.floor(Math.random() * 4);
    let randomLetter = firstToShow[random];
    let chars = '';
    let life = 10;
    let checkPoints = false;

    function start() {
    
        // slice sentence to letters and apend it to div
        for (i = 0; i < passwords[0].length; i++) {
        chars += `<div class="single-l"><span>${passwords[0].charAt(i)}</span></div></div>`;
        }

        $('#pass').html(chars);
        
        // hide letters
        $('.single-l span').hide();

        // show random lettter from firstToShow on start
        $( ".single-l span" ).each(function( index, element ) {
          // element == this

          if($(this).is(':contains("' + randomLetter + '")'))  {
            $( this ).show();

          }

          else if($(this).is(':contains(" ")'))  {
            $( this ).parent().addClass('grey');

          }

        });
        $('#letters-passed').append(`<li>${randomLetter}</li>`);
    }
    
 
    /* Pass letter func */ 
   
    $('#pass-letter').click(function() {
   
        
        let letter = '';
        
        // compares passed letter with each letter in passwords
        function passLetter() {
        
            letter = prompt('Podaj literę').toLowerCase();
            checkPoints = false; // reset checkPoint checker;

            $( "#letters-passed li" ).each(function( index, element ) {

                if ($(this).text().toLowerCase() == letter)  {
                    alert('Była');
                    passLetter(); // start function again
                }
             });   

             $( ".single-l span" ).each(function( index, element ) {

                 if ($(this).text().toLowerCase() == letter)  {
                     $( this ).show();
                     checkPoints = true;
                  }

             });
         
         }
        
        passLetter();
         
         // add passed letter to list  
         $('#letters-passed').append(`<li>${letter}</li>`)
        
         // check points 
         if (checkPoints === false) {
             alert('Pudło');        
             life--;
             $('#points').html(life);

             if (life == 0) {
                alert('Koniec gry');
                document.getElementById("reset").style.display = "block";
                document.getElementById("buttons").style.display = "none";
              }
          
         }

         else {
         
         }
     });
     
      // pass the answer
      $('#pass-password').click(function() {
        let pass = prompt('Podaj hasło'); 

        if (pass == passwords) {
            alert('Hasło odgadnięte');
            $('.single-l span').show();
            document.getElementById("reset").style.display = "block";
            document.getElementById("buttons").style.display = "none";
        } 
        else {
        alert('Złe hasło');
        life--;
         $('#points').html(life);
        }
      
      });
      
    start();
    
});