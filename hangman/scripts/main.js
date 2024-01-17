import {questionsList} from "./questions.js";

document.addEventListener("DOMContentLoaded", () => {
  const wordContainer = document.querySelector(".word-container"),
    virtualKeyboard = document.querySelector(".virtual-keyboard"),
    wordHint = document.querySelector(".word-hint"),
    hangmanImage = document.querySelector(".hangman-img"),
    incorrectGuessesCounter = document.querySelector(
      ".incorrect-guesses-counter"
    ),
    gameModal = document.querySelector(".modal_container"),
    modalTitle = document.querySelector(".modal-title"),
    modalContent = document.querySelector(".modal_content"),
    modalButton = document.querySelector(".modal-btn"),
    showHiddenWord = document.querySelector(".modal-hidden-word");

  let currentWord = "",
    counterWrong = 0,
    attemptsNum = 6,
    counterRight = 0;

  const lettersToGuess = (wordArr) => {
    wordArr = wordArr.split("");
    wordArr.forEach(() => {
      const li = document.createElement("li");
      li.classList.add("letter");
      // li.textContent = letter;
      wordContainer.appendChild(li);
    });
  };

  const getRandomWord = () => {
    let {word, hint} =
      questionsList[Math.floor(Math.random() * questionsList.length)];
    if (!currentWord && currentWord === word.toUpperCase()) {
      let {word, hint} =
        questionsList[Math.floor(Math.random() * questionsList.length)];
      lettersToGuess(word);
      wordHint.textContent = "Hint: " + hint;
      currentWord = word.toUpperCase();
      counterRight = currentWord.length;
      showHiddenWord.textContent = `The hidden word was - ${word}`;
    } else {
      lettersToGuess(word);
      wordHint.textContent = "Hint: " + hint;
      currentWord = word.toUpperCase();
      counterRight = currentWord.length;
      showHiddenWord.textContent = `The hidden word was - ${word}`;
    }
    console.log("answer =", currentWord);
  };

  const gameRestart = () => {
    document.addEventListener("keydown", keyboardInput);
    currentWord = "";
    counterWrong = 0;
    counterRight = 0;
    gameModal.classList.remove("show");
    modalContent.classList.remove("show");
    incorrectGuessesCounter.textContent = `${counterWrong} / ${attemptsNum}`;
    getRandomWord();
    hangmanImage.src = `./img/hangman-${counterWrong}.svg`;
    wordContainer.innerHTML = currentWord
      .split("")
      .map((el) => `<li class='letter'></li>`)
      .join("");
    document
      .querySelectorAll(".virtual-keyboard-button")
      .forEach((btn) => (btn.disabled = false));
  };

  // openModal for end of game
  const openModal = (text) => {
    modalTitle.textContent = `Game over you ${text}`;
    gameModal.classList.add("show");
    modalContent.classList.add("show");
    document.removeEventListener("keydown", keyboardInput);
    modalButton.addEventListener("click", gameRestart);
  };

  const checkLetter = (elem, letter) => {
    if (currentWord.includes(letter) && !elem.disabled) {
      elem.disabled = true;
      currentWord.split("").forEach((currentLetter, i) => {
        if (currentLetter === letter) {
          wordContainer.querySelectorAll("li")[i].innerHTML =
            currentLetter;
          wordContainer.querySelectorAll("li")[i].classList.add("guessed");
          counterRight--;
        }
      });
    } else {
      if (!elem.disabled) {
        elem.disabled = true;
        counterWrong++;
        hangmanImage.src = `./img/hangman-${counterWrong}.svg`;
        incorrectGuessesCounter.textContent = `${counterWrong} / ${attemptsNum}`;
      }
    }

    counterWrong === attemptsNum
      ? openModal("lost")
      : counterRight === 0
      ? openModal("won")
      : "";
  };

  const keyboardInput = (e) => {
    const letter = e.key.toUpperCase();
    const buttons = document.querySelectorAll(".virtual-keyboard-button");
    const button = Array.from(buttons).find(
      (btn) => btn.textContent === letter
    );
    if (/^[a-zA-Z]$/.test(letter)) {
      checkLetter(button, letter);
    } else {
      console.log(
        "You entered not a  letter or a letter other than the English alphabet"
      );
    }
  };

  virtualKeyboard.addEventListener("click", (e) =>
    checkLetter(e.target, e.target.textContent)
  );

  document.addEventListener("keydown", keyboardInput);
  getRandomWord();
});
