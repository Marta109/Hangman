## Hangman 
Hangman is a classic word game in which you must find the correct answer by guessing letters one at a time.

1.Task: https://github.com/rolling-scopes-school/tasks/tree/master/stage1/tasks/hangman    
2. Deploy: https://rolling-scopes-school.github.io/marta109-JSFE2023Q4/hangman/index.html    
3. Screenshot:
![297561166-4b80f1a1-b46e-43cd-b4e9-e5bc52407c54](https://github.com/user-attachments/assets/4479e93e-6f74-4322-932a-83fcee9068a5)
Score: 150/150
- [x] Responsive/adaptive UI from 1440px to 360px viewport: +10
- [x] The generation of DOM elements is implemented. body in the index.html is empty (can contain only script tag). This requirement can be checked by pressing Ctrl+U (Windows) or Option(⌥)+Command(⌘)+U (Mac): +20
- [x] The game starts with the correct default view (empty gallows, underscores for secret word, etc.) and a random question: +5
- [x] The user can play the game by using the virtual keyboard: +20
- [x] The user can play the game by using the physical keyboard: +20
- [x] When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15
- [x] When the letter is incorrect:
- [x] the incorrect guesses counter is updated: +5
- [x] a body part is added to the gallows: +10
 - [x] The clicked/pressed letter is disabled: +5
- [x] The body parts appear on the gallows in the logical order (head, body, left arm, right arm, left leg, right leg): +5
 - [x] When the user runs out of 6 attempts or wins the game, the modal window appears: +10
 - [x] The modal window includes the message about the game's outcome (winning or losing), the secret word and the 'play again' button: +10
 - [x] When the user clicks the 'play again' button, the game starts over by showing a new question and resetting the gallows, the incorrect guesses counter and the underscores for the secret word: +15
