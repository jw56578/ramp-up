// Goal of this project: write a pokemon game while learning how to use timer functions!!!

// 1st step: figure out how all pokemon will be stored.
var numbered = 0;
var stringNum = parseInt(numbered);
var pokemon = 'images/Pkmn'+ stringNum + 'png' // We'll avoid storing the monsters in an array and access them using these 2 variables (pokemon & numbered) instead.

// 2nd step: display starting slide(s), ask player for name to keep track of score.
$('#enterBtn').click(function(){
	$('#gameSlide').show();
	$('#slide1').hide();
})

$('#nextBtn').click(function(){
	$('#gameoverSlide').show();
	$('#gameSlide').hide();
})

// 3rd step: create begin game functionality

// 4th step: create timer feature
time = 30;
function timer(){
  if(!time<1){
   time = time - 1
   result.innerHTML = ""+time+""
 }else{
   window.clearInterval(update);
   result.innerHTML = "<h1>Countdown done</h1>"
 }
}
  update = setInterval("timer()",1000);


// 5th step: create timed page refreshes

// 6th step: upload random pictures to screen

// 7th step: have correct pokemon name show up as one of 4 random option each time the image shows

// 8th step: Show checkmark or wrong mark when answer is correct/incorrect in split second.

// 9th step: Leaf through each question, maximum of 10 questions.

// 10th step: calculate the score (add players name to a leaderboard?)
