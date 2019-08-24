//Create an array of letters in the alphabet for word guess game 
//Create random generator for letter guess
//Create a scorecard for wins 
//Create a scorecard for losses
//Create a scorecard for guesses 
//When playere wins add to score card 
//When player loses subtract one form score card


//letters user can type for game 
var computersChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];

//Setting scorecard
var wins = 0;
var losses = 0;
var guesses = 9;
var userGuesses = "";
var computerGuess = "";

//Random number/letter generator for game to choose letter
computerGuess = computersChoice[Math.floor(Math.random() * computersChoice.length)];

//Linking variables to elements
var userChoices = document.getElementById("userchoice-button");
var guessSoFar = document.getElementById("guesses");
var winnerAlert = document.getElementById("winner");
var loserAlert = document.getElementById("loser");


//Function for when user presses certain key it will run the below functions
document.onkeypress = function (event) {
    var userGuess = event.key;
    var resetGuesses = function () {
        guesses = 9;
        userGuesses = "";
        document.querySelector("#guesses").innerHTML = ''; // reset our view
    }

    userGuesses += userGuess + ", ";
    guesses--;

    if (userGuess === computerGuess) {
        wins++;
        guesses === 0;
        resetGuesses();

    } else if (guesses === 0) {
        losses++;
        resetGuesses();
    }

    userChoices.textContent = "Guesses I chose: " + userGuesses;
    winnerAlert.textContent = "Wins: " + wins;
    guessSoFar.textContent = "Guesses left: " + guesses;
    loserAlert.textContent = "Losses: " + losses;

}


