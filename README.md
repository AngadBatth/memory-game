# Memory Game and Jokes 

This is a memory game where the user needs to match pairs of images hidden behind cards. The game uses two server-side APIs to provide the images and jokes displayed on the page.

## How to Play

The game starts when the user clicks on the "Start Game" button. The user then needs to click on two cards to reveal the images hidden behind them. If the images match, the cards will remain flipped over. If the images do not match, the cards will flip back over. The user continues to click on cards until all the cards have been matched or the timer runs out. The user can listen to a music while playing the game by clicking on the "Play Music" button. The user can pause the music by clicking on the "Pause Music" button. 

## Features
- The game uses two server-side APIs to provide the images and jokes displayed on the page.
- The game provides a friendly user interface with a landing page, a game page, and a game over page.
- The game uses a timer to keep track of the time the user takes to complete the game.
- The game uses a modal to display the user's score when the game is completed or timer runs out and users can add their initials at the end of the game.

## Technologies Used
- HTML
- CSS
- JavaScript
- Google fonts
- Bulma CSS framework

## APIs Used
The game uses two server-side APIs and a third API to play background music.

- Random Image API (server-side): This API provides a random image to be used as the background for each card. The image is fetched from a public image hosting service.
- Joke API: This API (server-side): provides a random joke to be displayed at the bottom of the page. The joke is fetched from a public joke API.
- SoundJS API: This API is used to play background music.

## License
This game is licensed under the MIT License. See the LICENSE file for more details.

## Screenshot and link for the deployed application
![Screenshot of deployed application](./assets/Screenshot/xxxxx)
[Link deployed application](https://angadbatth.github.io/memory-game/)