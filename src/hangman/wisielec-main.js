const passwords = ['Gdzie dwóch się bije tam trzeci korzysta'],
    firstToShow = ['a', 'e', 'i', 'o'],
    random = Math.floor(Math.random() * 4),
    randomLetter = firstToShow[random],
    singleLetter = '.single-l span';
let chars = '',
    letter = '',
    life = 10,
    checkPoints = false;

function start() {
    for (let i = 0; i < passwords[0].length; i++) {
        chars += `<div class="single-l"><span>${passwords[0].charAt(i)}</span></div></div>`;
    }

    $('#pass').html(chars);
    $(singleLetter).hide();

    $(singleLetter).each(function() {
        if($(this).is(':contains("' + randomLetter + '")'))  {
            $( this ).show();
        } else if ($(this).is(':contains(" ")'))  {
            $( this ).parent().addClass('grey');
        }
    });

    $('#letters-passed').append(`<li>${randomLetter}</li>`);
}

function passLetter() {
    letter = prompt('Podaj literę').toLowerCase();
    letter = letter.slice(0,1);
    checkPoints = false;

    $( "#letters-passed li").each(function() {

        if ($(this).text().toLowerCase() === letter)  {
            alert('Była');
            passLetter();
        }
    });

    $(singleLetter).each(function() {
        if ($(this).text().toLowerCase() === letter)  {
            $( this ).show();
            checkPoints = true;
        }
    });

    $('#letters-passed').append(`<li>${letter}</li>`);

    if (checkPoints === false) {
        alert('Pudło');
        life--;
        $('#points').html(life);

        if (life === 0) {
            alert('Koniec gry');
            document.getElementById("reset").style.display = "block";
            document.getElementById("buttons").style.display = "none";
        }
    }
}

function passPassword() {
    let pass = prompt('Podaj hasło');

    if (pass === passwords) {
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
}


$(document).ready(function() {
    start();

    $('#pass-letter').click(function () {
        passLetter();
    });

    $('#pass-password').click(function () {
        passPassword();
    });
});
