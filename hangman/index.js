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

  //guessed letters
  const lettersToGuess = ["a", "b", "c", "d"];
  lettersToGuess.forEach((letter) => {
    const li = document.createElement("li");
    li.classList.add("letter");
    // li.textContent = letter;
    wordContainer.appendChild(li);
  });

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
    value = letter;
    button.classList.add("virtual-keyboard-button");
    virtualKeyboard.appendChild(button);
  }

  //  game modal --------------------------------
  const gameModal = document.createElement("div");
  gameModal.classList.add("modal_container");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal_content");
  const modalTitle = document.createElement("h3");
  modalTitle.classList.add("modal_title");
  modalTitle.textContent = "game over you";
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
  gameModal.appendChild(modalTitle);
  gameModal.appendChild(showHiddenWord);
  gameModal.appendChild(modalButton);

  container.appendChild(hangmanContainer);
  container.appendChild(gameContainer);
  container.appendChild(gameModal);

  document.body.appendChild(container);
});
