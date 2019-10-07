let icons = [
    'fa-anchor', 'fa-bell', 'fa-bomb', 'fa-camera', 'fa-cog', 'fa-dice', 'fa-binoculars', 'fa-award', 'fa-bath'
];

let cards = [];
let compare = [];
let saved = [];
let score_1 = 0;
let score_2 = 0;

function generateCards(icon) {
  for (let x = 0; x<=1; x++) {
    cards.push({element: '<i class="fas ' + icon + '"></i>', label: icon})
  }
}

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

function displayCards() {
    let elements = '';
    for (let n = 0; n < cards.length; n++) {
        elements += `<div id="${n}" class="square" value='${cards[n].label}'>${cards[n].element}</div>`
    }
    $('#table').html(elements);
}

function compareCards() {
    if (compare.length <= 1) {
        $(this).toggleClass('show flipInY');

        compare.push(($(this).attr('value')));
        saved.push('#'+($(this).attr('id')));
    } else if (compare.length === 2) {

        let cardA = saved[0];
        let cardB = saved[1];

        if ((compare[0] === compare[1]) && (cardA != cardB)) {

            $(cardA).addClass('saved');
            $(cardB).addClass('saved');
            compare = [];
            saved = [];
            score_1++;
            $('#score-1').html(`Pairs find out: ${score_1}`);

            if (score_1 == 9) {
                alert('End of the game');
                document.getElementById("reset").style.display = "block";
            }
        } else {
            $('.square').removeClass('show');
            compare = [];
            saved = [];
            score_2++;
            $('#score-2').html(`Missed clicks: ${score_2}`);
        }
    }
}

function init() {
    icons.forEach(generateCards);
    shuffle(cards);
    displayCards();
}

$(document).ready(function () {
    init();
    $('.square').click(compareCards)
});
