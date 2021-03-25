# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Raymond Wang

Time spent: **5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [X] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img src="http://g.recordit.co/Rzbj4qRfkJ.gif" width = 250><br>
<img src="http://g.recordit.co/c5Su1jtqb5.gif" width = 250><br>
<img src="http://g.recordit.co/iXGBcqqqRP.gif" width = 250><br>
<img src="http://g.recordit.co/aCpw8P3zfO.gif" width = 250><br>


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
-https://www.intmath.com/trigonometric-graphs/music.php 
-https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random 
-https://www.w3schools.com/ 
-https://css-tricks.com/perfect-full-page-background-image/
2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
This is my first time creating a web page and using HTML,CSS, and javascript. Being new to this language was a bit of a challenge to me as I 
had to learn the syntax of the language. To overcome this, I had to watch some videos online and read some documentation to understand
the syntax to understand the code. Beside this technical challenge i faced creating this submission, i also came across a weird 
interaction with my code. When I try to speed up the playback, there is a certain threshold that speeds up the playback too quickly 
where we cannot see which button was played, if the pattern is too long. I had to spend some time to find the best threshold for 
speeding up the turn from the help of the console. At the same time, I decided to use a separate variable to determine what kind 
of pattern the user wants to repeat. If the variable is true it means that the user wants to repeat the 8 button pattern that will 
speed up each turn. If the user chooses to repeat the mystery song, the pattern will not speed up each turn as it is a very long 
pattern. While resolving this issue I came across another problem where every time a user makes a mistake, the pattern speed is 
increased which is not what we want. To fix this I had to decrease the speed when the user makes a mistake; therefore, the 
speed is kept the same for each particular section. All in all, I had an amazing learning experience with creating a website 
from this project.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   I am very new to web development programming, as the majority of my academic experience has been working on software projects, dealing with optimization of code (algorithm analysis) as well as testing out code.
   After completing this submission, I do have a few questions in mind about web development. First, I want to ask how long does one particular web development assignment take? Secondly, I want to understand the key
   responsibilities of a web developer? Lastly, does a web developer have to be very creative in terms of how the web page looks?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I believe that there could always be improvements on this projects as well as cool features to add. If I had more time to work on this project i would
   definitely add a feature where users can create their own pattern then try to replicate their pattern. Another feature I would like to implement on this project is to make the game button have more texture and borders.
   I would also spend some time to make the webpage more unique and visually pleasing. Besides making the webpage look appealing and adding more features, I think I can work more on reworking some functions and code to better
   optimize this project. Some functions that we could get rid of are the win and lose functions which are being called as often. Some functions like playClueSequence are important because we will use the contents inside often
   therefore the function is very optimal for our code.

## License

    Copyright Raymond Wang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
