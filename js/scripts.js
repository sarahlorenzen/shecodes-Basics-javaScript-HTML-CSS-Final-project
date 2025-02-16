// Word List
const wordList = [
  {
    word: "code",
    hint: "typed set of instructions that's fun!",
  },
  {
    word: "javascript",
    hint: "code that adds functionality",
  },
  {
    word: "html",
    hint: "code that provides structure",
  },
  {
    word: "css",
    hint: "code that adds design",
  },
  {
    word: "hexadecimal",
    hint: "code for colors",
  },
];

// Game Variables
const wordDisplay = document.querySelector(".word");
const wordHint = document.querySelector(".hint");
const lettersGuessed = document.querySelector(".guesses");
const lettersKeyboard = document.querySelector(".keyboard");
const partsHangman = document.querySelector(".hangman-display img");
