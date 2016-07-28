// TODO: create a simple interactive experience using directional keyboard arrowkey events

var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

var xPosition = 0;
var yPosition = 0;

context.rect(xPosition, yPosition, 50, 50);
context.stroke();

function move(e){
	//alert(e.keyCode); // helps get the number codes for each arrow key clicking event

	if(e.keyCode == 39){ //39=right
		xPosition+=5;
	}
	if(e.keyCode == 37){ //37=left
		xPosition-=5;
	}
	if(e.keyCode == 38){ //38=up
		yPosition-=5;
	}
	if(e.keyCode == 40){ //40=down
		yPosition+=5;
	}

	canvas.width = canvas.width;
	context.rect(xPosition, yPosition, 50, 50);
	context.stroke();
}
document.onkeydown = move;