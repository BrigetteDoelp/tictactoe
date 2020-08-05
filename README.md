# Tic Tac Toe Solo Project #

## Project Description ##

This was a solo project assigned to test the depth of our knowledge and skill by the end of mod1. We were tasked with creating a fully functional tic tac toe game from scratch.
The two players should be able to click the space of their choice and have the board be updated with their assigned player token.
Wins are recorded and saved, as in persist upon refresh, and different messages pop up on the page based on turn, who wins, and if there is a draw.
When a game concludes, either by win or draw, the board resets after a a set time down.

## Learning Goals ##

* Solidify and demonstrate your understanding of:
*DRY JavaScript
localStorage to persist data
Event delegation to handle similar event listeners*
* Understand the difference between the data model and how the data is displayed on the DOM.
* Iterate through/filter DOM elements using for loops.
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge.

## Planning ##

This project was created using the `Atom` text editor, and project management was done in a google doc, as well as many post-it-notes. I referenced `MDN documentation`, lesson plans, and class notes for information. I contacted peers and mentors for support when I became stuck. My remote repository is stored on `GitHub`.

I was given six days to complete this project.

**Challenges**
* Keeping up with the git workflow was a bit more difficult that I thought it would be working solo. I found that I needed to be more attentive with my commits than I was when working with a group.
* Checking win conditions was a struggle. It took a long time to figure a way to check them.
* Getting started. This project had no set iterations, so a starting point wasn't clearly defined.

**Wins**
* The win condition checks! I knew I didn't want to use a long series of arrays, so figuring out a way to make it work without them makes me really happy.
* I'm very proud of the separation of the `DOM` and `data model`. I feel this is the best example of it in any work I've submitted thus far.
* Just in general, I consider this project a huge win. I was under a tight time constraint with little to no starting direction given, and I am very proud of myself for having completed this amidst those conditions.

## Functionality ##

![functionality of game](https://i.imgur.com/H8YhCVQ.gif)

* When a space is clicked, the token assigned to that space is the token of the current player. The space can not be reassigned.
* Upon a win, that player's win is logged under their column.
* When a game is complete, either by win or draw, the game board is reset after a set amount of time.

## A Look Under The Hood ##

This project had heavy emphasis of keeping the `data model` and the `DOM` separate. We were to utilize our the `Game` class and the `Player` class to handle the logic of the game, and use the `main.js` file for the updating of the `DOM`. The `game.js` and `player.js` files are meant to handle the state of the game, while the `main.js` file handles the view of the game.

For example, adding a win to a player's win counter. This is first done in the `game.js` file. It is a very simple method who's only purpose is to increase the win counter on the instantiation of the `Player` class by one. It is one line of code with a very specific job. This method is called in the more meaty method of `updateSpace()`. It only runs on a player's win. That `updateSpace()` method is then called in the `main.js` file, in the function found on `line 24`, `updateSpaceClicked`.

Next, we want to look to the `updateView()` function. That is a function tasked with updating the view of the entire game board. It references the `Game` object as our `data model`, and updates the view based off of the `state` of the game. `updatePlayerWins()` is called within that function, and `updateView` is called inside of `updateSpaceClicked()`, ensuring that on every click, the view of the game reflects the state of the game in the  `data model`.

## Programming Languages Used ##

* JavaScript
* HTML
* CSS

## Built With ##

* Vanilla JavaScript
* HTML & CSS

## Comp Given ##

https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html

## Credits ##

[Brigette Doelp](https://github.com/BrigetteDoelp)






.
