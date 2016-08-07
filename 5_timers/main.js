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
	var randomNum = Math.floor(Math.random() * 152 + 0);
	if(randomNum < 152){
		$('#pokemonImage').attr("src", "Images/Pkmn"+randomNum+".png")
	}
	// Below we store a random # between 0 and 4 in a variable (this will help in placing the correct name of the pokemon pictured in a random slot)
	var pokemonNames = 
["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglypuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hyno","Krabby","Kingler","Voltorb","ELectrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyrados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","FLareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo", "Mew"];

	var randomNumBetween0And4 = Math.floor(Math.random() * 3 + 1);
	var correctedForRandomNum = randomNum - 1
	var randomize = pokemonNames[correctedForRandomNum]; 
// TODO: Below we must add 3 random but incorrect quiz answers in every place the correct quiz answer is not.
	// We accomplish this by getting a new random number different from our original randomNum variable. 
	var randomWrongNum = Math.floor(Math.random() * 152 + 0);

var newRandomNum1;
var newRandomNum2;
var newRandomNum3;

function assignNumbersToWrongAnswers(){
	//var x = undefined, y = undefined, z = undefined;

	var randomWrongNum = Math.floor(Math.random() * 152 + 0);
	
	// My first if statement is working, the rest are NOT!??
	if(randomWrongNum != randomNum){
	  newRandomNum3 = randomWrongNum;
	} 
	console.log('hola!')

	var randomWrongNum = Math.floor(Math.random() * 152 + 0);
	if(y = undefined && randomWrongNum != x && randomWrongNum != randomNum){
	  newRandomNum2 = randomWrongNum;
	} 
	console.log('como')
	
	var randomWrongNum = Math.floor(Math.random() * 152 + 0);
	if(z = undefined && randomWrongNum != y && randomWrongNum != x && randomWrongNum != randomNum){
	  newRandomNum1 = randomWrongNum;
	} 
	console.log('esta?')

}

console.log(newRandomNum3)

assignNumbersToWrongAnswers();

	var wrongAnswerChoice1 = pokemonNames[newRandomNum1];
	var wrongAnswerChoice2 = pokemonNames[newRandomNum2];
	var wrongAnswerChoice3 = pokemonNames[newRandomNum3];
	
	if(randomNumBetween0And4 == 0){ // Switching '=' to '==' makes my pokemon names appear in random order.
		optionA.innerHTML = ""+randomize+"";
		optionB.innerHTML = ""+wrongAnswerChoice1+"";
		optionC.innerHTML = ""+wrongAnswerChoice2+"";
		optionD.innerHTML = ""+wrongAnswerChoice3+"";
	} else if(randomNumBetween0And4 == 1){
		optionB.innerHTML = ""+randomize+"";
		optionA.innerHTML = ""+wrongAnswerChoice1+"";
		optionC.innerHTML = ""+wrongAnswerChoice2+"";
		optionD.innerHTML = ""+wrongAnswerChoice3+"";
	} else if(randomNumBetween0And4 == 2){
		optionC.innerHTML = ""+randomize+"";
		optionA.innerHTML = ""+wrongAnswerChoice1+"";
		optionB.innerHTML = ""+wrongAnswerChoice2+"";
		optionD.innerHTML = ""+wrongAnswerChoice3+"";
	} else if(randomNumBetween0And4 == 3){
		optionD.innerHTML = ""+randomize+"";
		optionA.innerHTML = ""+wrongAnswerChoice1+"";
		optionB.innerHTML = ""+wrongAnswerChoice2+"";
		optionC.innerHTML = ""+wrongAnswerChoice3+"";
	}


}
randomPokemon();





// TODO: Show checkmark or wrong mark when answer is correct/incorrect in split second.

// TODO: Leaf through each question, maximum of 10 questions.
// create code that counts the number of pokemon displayed to the user and once that number hits the number you'd like tell the computer to stop the game and go to gameOver screen.

// TODO: calculate the score (add players name to a leaderboard?)

// TODO: write code so that if browser navigates to the gameSlide page by mistake (no game is initiated) the browser returns an error page.