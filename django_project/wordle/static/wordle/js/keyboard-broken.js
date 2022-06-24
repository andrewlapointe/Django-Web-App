// import secretWords from "./dataFiles/secretWords.json" assert { type: "json" };
const secretWords = require("./dataFiles/secretWords.json");

let currentTile = 0;
let currentTilePos = 0;
let currentRow = [];
let idCache = [];
let greenCounter = 0;

let secretWord =
  secretWords[Math.floor(Math.random() * secretWords.length)].toUpperCase();
console.log(secretWord);

function cover(letter) {
  // cover() is the entry point for the key buttons
  // the name "cover" is an anachronism from an old version of the code
  if (4 in currentRow) {
    snackbar(2);
    return;
  } else {
    id = getCurrentTile();
    tile = document.getElementById(id);
    idCache.push(id);
    currentRow.push(letter);
    tile.classList.add("cover");
    tile.innerHTML = letter;
  }
}

function getCurrentTile() {
  if (currentTile < 30 && currentRow.length != 5) {
    currentTile++;
    return "tile" + currentTile;
  }
}

function getCurrentTilePos() {
  if (currentTile < 5 && currentRow.length != 5) {
    currentTilePos++;
    return currentTilePos;
  } else if (currentTile < 5 && currentRow.length == 5) {
    snackbar(2);
    return;
  } else {
    currentTilePos = 1;
    return currentTilePos;
  }
}

function getTileColor(guess) {
  guessState = checkGuess(guess);
  if (guessState === "green") {
    return "green";
  } else if (guessState === "yellow") {
    return "yellow";
  } else {
    return "red";
  }
}

function showRow() {
  // This is the entry point for the ENTER key.
  if (
    4 in currentRow &&
    secretWords.includes(currentRow.join("").toLowerCase())
  ) {
    for (i = 0; i < 5; i++) {
      document.getElementById(idCache[i]).style.background = getTileColor(
        currentRow[i]
      );
    }
    if (greenCounter === 5) {
      showMenu();
    } else if (currentTile >= 30) {
      document.getElementById("menu-text").innerHTML =
        "Game Over. The secret word was: " + secretWord;
      showMenu();
    }
    currentRow = [];
    idCache = [];
    greenCounter = 0;
  } else if (
    4 in currentRow &&
    secretWords.includes(currentRow.join("").toLowerCase()) == false
  ) {
    snackbar(4);
  } else {
    snackbar(1);
  }
}

function checkGuess(guess) {
  secretLetters = getSecretWord();
  if (
    secretLetters.includes(guess) &&
    secretLetters.indexOf(guess) == currentRow.indexOf(guess)
  ) {
    greenCounter++;
    return "green";
  } else if (
    secretLetters.includes(guess) &&
    secretLetters.indexOf(guess) != currentRow.indexOf(guess)
  ) {
    return "yellow";
  } else {
    return "red";
  }
}

function deleteLetter() {
  // This is the entry point for the DELETE key.
  if (currentRow.length > 0) {
    lastTile = document.getElementById(idCache[idCache.length - 1]);
    lastTile.innerHTML = " ";
    idCache.pop();
    currentRow.pop();
    currentTilePos--;
    currentTile--;
  } else {
    snackbar(5);
  }
}

function getSecretWord() {
  letters = [];
  letters[0] = secretWord.charAt(0);
  letters[1] = secretWord.charAt(1);
  letters[2] = secretWord.charAt(2);
  letters[3] = secretWord.charAt(3);
  letters[4] = secretWord.charAt(4);
  // for (var i = 0; i > secretWord.length; i++) {
  // letters[i] = secretWord.charAt(i);
  // }
  return letters;
}
