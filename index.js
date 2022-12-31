let deck;
let values;
window.onload = function() {
    createDeck();
    shuffleDeck();
function createDeck(){
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for(i = 0; i < types.length; i++){
        for(j = 0; j < values.length; j++){
            deck.push(values[j] + "-" + types[i]);
        }
    }
// console.log(deck);
}

function shuffleDeck() {
    for(i = 0; i < 1000; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let temp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = temp;
    }
    console.log(deck);
}
