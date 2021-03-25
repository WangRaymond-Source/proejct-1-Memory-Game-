// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var pattern = [5, 2, 4, 3, 2, 1, 2, 4]; // keep tract of the secret pattern of button presses
var pattern_Marry = [3,2,1,2,3,3,3,2,2,2,3,5,5,3,2,1,2,3,3,3,1,2,2,3,2,1]; // pattern for the song "Marry Had a Little Lamb"
var progress = 0; //Help track the move of the player
var gamePlaying = false;  //hold the state of the game(played or not played)
var volume = 0.5; //must be between 0.0 and 1.0
var tonePlaying = false;// hold the state of the sound
var guessCounter = 0;//counter that tracks the pattern the computer has to play to the user
var strikes = 0;// tracks the number of mistakes the user has made
var clueHoldTime = 500; //how long to hold each clue's light/sound (1000)
var speedUp = false;
//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Sound Synthesis Functions
//these are the sounds of each colored button
const freqMap = {
  //sounds of a c major scale 
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392,
  6: 440,
  7: 493.88,
  8: 523.25,
}

//function to begin the game
function startGame(){
  //uncover the options of pattern
  document.getElementById("Random").classList.remove("hidden");
  document.getElementById("Challenge").classList.remove("hidden");
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  speedUp = false;
  strikes = 0;//reset strikes
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}
//function that stop the game
function stopGame(){
  gamePlaying = false;
  clueHoldTime = 500; //reset clueHoldTime
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("Random").classList.add("hidden");
  document.getElementById("Challenge").classList.add("hidden");
}
//plays the sounds for the page
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
//start playing the sound
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
//stop the sound
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}
//lite up the game buttons
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
//play a noise of the game button when pressed
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
//the computer plays the pattern that the user needs to repeat
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  //could make each step fast so memorizing is harder
  if(speedUp){
    clueHoldTime-= 50;  
  }
}
//function helps choose which pattern is being used
function choosePattern(btn){
  document.getElementById("Random").classList.add("hidden");
  document.getElementById("Challenge").classList.add("hidden");
  if(btn == 1){
    for(let i=0;i < pattern.length;i++){ // for each clue that is revealed so far
      pattern[i] = Math.floor((Math.random() * 8) + 1);;
    }
    speedUp = true;
  }else{
    pattern = pattern_Marry;
    progress = pattern_Marry.length - 1;
    guessCounter = progress;
  }
  playClueSequence();
}

// function for game lost
function loseGame(){
  stopGame();
  clueHoldTime = 500;
  alert("Game Over. You lost.");
}
//Function for game won
function winGame(){
  stopGame();
  alert("Game Over. You won.");
}
//the actaul guess game
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn != pattern[guessCounter]){
    if(strikes == 3){
    //guess was wrong
    loseGame();
    }else{
      strikes++;
      alert("You have " + (3 - strikes) + " strikes left!");
      playClueSequence();
      clueHoldTime+= 50; 
    }
  }else{
    //guess was correct
    if(progress == guessCounter){
      //the progress is equal to guessCounter
      if(progress == pattern.length - 1){
        //if the progress is equal to the length of the pattern we win
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }
}