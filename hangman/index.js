document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.classList.add("container");

  const hangmanContainer = document.createElement("section");
  hangmanContainer.classList.add("hangman_container");

  const hangmanImage = document.createElement("img");
  hangmanImage.src = "./img/hangman-0.svg";
  hangmanImage.alt = "hangman-img";
  hangmanImage.classList.add("hangman-img");

  const gameTitle = document.createElement("h1");
  gameTitle.classList.add("game-title");
  gameTitle.textContent = "HANGMAN GAME";

  const gameContainer = document.createElement("section");
  gameContainer.classList.add("game-container");

  const wordContainer = document.createElement("ul");
  wordContainer.classList.add("word-container");

  const wordHint = document.createElement("h2");
  wordHint.classList.add("word-hint");
  wordHint.textContent = "Hint: A human-powered vehicle with two wheels.";

  const incorrectGuesses = document.createElement("h2");
  incorrectGuesses.classList.add("incorrect-guesses");
  const incorrectGuessesCounter = document.createElement("span");
  incorrectGuessesCounter.classList.add("incorrect-guesses-counter");
  incorrectGuessesCounter.textContent = "0 / 6";
  incorrectGuesses.textContent = "Incorrect guesses: ";
  incorrectGuesses.appendChild(incorrectGuessesCounter);

  const virtualKeyboard = document.createElement("div");
  virtualKeyboard.classList.add("virtual-keyboard");

  // letter buttons --------------------------------
  for (let i = 0; i < 26; i++) {
    const button = document.createElement("button");
    const letter = String.fromCharCode(65 + i).toUpperCase();
    button.textContent = letter;
    // button.value = letter;
    button.classList.add("virtual-keyboard-button");
    virtualKeyboard.appendChild(button);
    button.addEventListener("click", (e) => checkLetter(e.target, letter));
  }

  //  game modal --------------------------------
  const gameModal = document.createElement("div");
  gameModal.classList.add("modal_container");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal_content");
  const modalTitle = document.createElement("h3");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = "Game over you";
  const showHiddenWord = document.createElement("p");
  showHiddenWord.classList.add("modal-hidden-word");
  showHiddenWord.textContent = "The hidden word was";
  const modalButton = document.createElement("button");
  modalButton.classList.add("modal-btn");
  modalButton.textContent = "Play Again";

  //  add elements --------------------------------

  hangmanContainer.appendChild(hangmanImage);
  hangmanContainer.appendChild(gameTitle);

  gameContainer.appendChild(wordContainer);
  gameContainer.appendChild(wordHint);
  gameContainer.appendChild(incorrectGuesses);
  gameContainer.appendChild(virtualKeyboard);

  gameModal.appendChild(modalContent);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(showHiddenWord);
  modalContent.appendChild(modalButton);

  container.appendChild(hangmanContainer);
  container.appendChild(gameContainer);
  container.appendChild(gameModal);

  document.body.appendChild(container);

  // add game logic --------------------------------
  const questionsList = [
    {
      word: "apple",
      hint: "A common fruit with a red or green skin.",
    },
    {
      word: "cat",
      hint: "A small, domesticated carnivorous mammal.",
    },
    {
      word: "sun",
      hint: "The star at the center of our solar system.",
    },
    {
      word: "book",
      hint: "A written or printed work consisting of pages.",
    },
    {
      word: "tree",
      hint: "A tall, perennial plant with a trunk and branches.",
    },
    {
      word: "beach",
      hint: "A sandy shore along the edge of a body of water.",
    },
    {
      word: "house",
      hint: "A building for human habitation.",
    },
    {
      word: "car",
      hint: "A wheeled motor vehicle used for transportation.",
    },
    {
      word: "flower",
      hint: "The reproductive structure found in plants.",
    },
    {
      word: "water",
      hint: "A clear, colorless, odorless, and tasteless liquid.",
    },
    {
      word: "bird",
      hint: "A warm-blooded, feathered vertebrate with wings.",
    },
    {
      word: "moon",
      hint: "The natural satellite of the Earth.",
    },
    {
      word: "time",
      hint: "The indefinite continued progress of existence.",
    },
    {
      word: "song",
      hint: "A short musical composition with words.",
    },
    {
      word: "sleep",
      hint: "A naturally recurring state of rest for the body and mind.",
    },
  ];

  let currentWord = "";
  let counter = 0;

  const lettersToGuess = (wordArr) => {
    console.log(wordArr);
    wordArr = wordArr.split("");
    wordArr.forEach((letter) => {
      const li = document.createElement("li");
      li.classList.add("letter");
      // li.textContent = letter;
      wordContainer.appendChild(li);
    });
  };

  const getRandomWord = () => {
    const {word, hint} =
      questionsList[Math.floor(Math.random() * questionsList.length)];
    lettersToGuess(word);
    wordHint.textContent = hint;
    currentWord = word.toUpperCase();
    showHiddenWord.textContent = `The hidden word was - ${word}`;

    console.log("answer =", word);
    console.log(word, hint);
  };

  const checkLetter = (elem, letter) => {
    if (currentWord.includes(letter)) {
      console.log("ura");
    } else {
      counter++;
      incorrectGuessesCounter.textContent = `${counter} / 6`;
    }
  };

  getRandomWord();
});
