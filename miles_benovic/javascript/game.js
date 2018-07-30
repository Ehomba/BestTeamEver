var wins = 0;

var loses = 0;

var words = ["red", "blue", "yellow", "teal", "brown", "black", "pink", "gray", "white"];

var underscores = ""

var chooseWord = function(x) {
var i = Math.floor(Math.random() * x.length);
var chosenWord = x[i];
console.log(chosenWord);
return chosenWord;
};

var finalWord = chooseWord(words);

var fillUnderscores = function() {
    for (i = 0; i < finalWord.length; i++){
        underscores += ("_");
        console.log(underscores)
        newUnderscore = underscores.split("");
    }
}
 fillUnderscores();

// document.onkeyup = function myKeyUpHandGuess() {
//   alert("A key up event took place within the document!");
// }