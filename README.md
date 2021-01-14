# EarWorm
*This repo was originally on my GA enterprise account*

*You can view this app at https://pages.git.generalassemb.ly/ryhuz/earworm/*

SEI-25 Project 1 - Get ready for ear drums to bleed

Remember listening to music? That was so long ago.
Remember owning an iPod? There was a cool music quiz that used your library to test you.

## Systems
---
This game was built on rock & roll. It's functions were built on HTML, CSS, and Javascript.

## How it works
---
1. #### Intro: A splash that 'loads' into the main game

1. ####  Landing: Where you choose the options for the game
    * **Rules**
    * **Player name**
    * **Mode** - Artist mode, Genre mode, MiX iT uP!
    * **Difficulty** - Lyrics only, clips only, or easy mode (both)
    * **Timer on/off** - Play with 15s timer or free and easy
    * **Scoring mode** - Basic: 10 rounds, 1pt for each correct guess. Staying Alive: Start with 10000 pts, and lose points as time passes, for wrong answers, and if you run out of time.
    
    * **Choose artist** (for artist mode)
    * **Choose genre** (for genre mode)
    * **Show artist** (for genre and mixed mode) - Shows artist logo to make your guess easier
1. #### Game
    * **Clue box** (artist logo and lyrics)
    * **Guess box**
    * **Audio player** (not displayed)
    * **Timer**
    * **Scoreboard**

## Challenges
---
   * I had a bug that caused the game counter to malfuntion after 3 rounds. Hours on the debugger didn't show me where the error was. I eventually realised that a function that I had tried to implement recursively was not wokring the way I wanted.
   **The Fix**
   Defined the function globally to be called where it is needed.
   * CSS Transitions only worked once. Checking the forums, I learnt that for an element to undergo a second transition, it would have to be destroyed and cloned.
   **The Fix**
   The functions controlling the transitions cloned the element, destroyed the original one, and inserted the cloned element with the desired transition
   
### Built with
    - Javascript
