// TODO: have button change the color of the text.

/*
var mainTitle = document.getElementById('mainTitle')
var btn = document.getElementById('btn')

btn.onclick = function(){
	mainTitle.style.color = "indianred";
}
*/

// TODO: have button change the text color and have it cycle through multiple colors

var mainTitle = document.getElementById('mainTitle')
var btn = document.getElementById('btn')
var i = 0
		btn.onclick = function(){
			var colorOption = ["red", "skyblue", "lightgray", "tan", "black"];
			mainTitle.style.background = colorOption[i];
			i++

			if(i > 4){
				i = 0
			};
		}


// TODO: have button leaf through images and have it be cyclical

var natureImages = document.getElementById('natureImages');
var leftArrow = document.getElementById('leftArrow');
var rightArrow = document.getElementById('rightArrow');

var slideShow = ["waterImg.jpeg", "windImg.jpg", "fireImg.jpeg"];
var pic = 0
natureImages.src = slideShow[pic]

leftArrow.onclick = function(){
	if(pic == 0){
		pic = 2;
	} else if(pic == 2){
		pic = 1;
	} else if(pic == 1){
		pic = 0;
	}

	natureImages.src = slideShow[pic];
	console.log('left click');
}

rightArrow.onclick = function(){
	if(pic == 0){
		pic = 1;
	} else if(pic == 1){
		pic = 2;
	} else if(pic == 2){
		pic = 0;
	}

	natureImages.src = slideShow[pic];
	console.log('left click');
}
