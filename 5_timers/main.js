// Goal of this project: write a pokemon game while learning how to use timer functions!!!

// 1st step: figure out how all pokemon will be stored.
var numbered = 0;
var stringNum = parseInt(numbered);
var pokemon = 'images/Pkmn'+ stringNum + 'png' // We'll avoid storing the monsters in an array and access them using these 2 variables (pokemon & numbered) instead.

// 2nd step: display starting slide(s), ask player for name to keep track of score.

// Below we create a timer feature!
time = 5;
function timer(){
  if(!time<1){
   time = time - 1
   result.innerHTML = ""+time+""
 }else{
   window.clearInterval(update);
   window.location.reload()
 }
}

// Below we check the url to see if it's on the proper page, if so we run code that triggers our timer function every so often
if(window.location.href.indexOf("gameSlide") > -1){
	update = setInterval("timer()",1000);
}


function randomPokemon(){
	//var chosenPokemon = "Pkmn"+randomNum;
	var randomNum = Math.floor(Math.random() * 152 + 0);
	if(randomNum != 5){
		$('#pokemonImage').attr("src", "Images/Pkmn"+randomNum+".png")
	}
}
randomPokemon()

// TODO: have correct pokemon name show up as one of 4 random option each time the image shows

// TODO: Show checkmark or wrong mark when answer is correct/incorrect in split second.

// TODO: Leaf through each question, maximum of 10 questions.

// TODO: calculate the score (add players name to a leaderboard?)

// TODO: write code so that if browser navigates to the gameSlide page by mistake (no game is initiated) the browser returns an error page.