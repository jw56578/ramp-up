// TODO: Experiment with hover effects to make dynamic looking features

var tuQuoqueTab = document.getElementById("tuQuoqueTab");
var illicitMajorTab = document.getElementById("illicitMajorTab");
var texasSharpTab = document.getElementById("texasSharpTab");

// we use the onmouseover & onmouseout js functions on our html element, hover requires jQuery
tuQuoqueTab.onmouseover = function(){
	tuQuoqueTab.style.background = 'red';
}
tuQuoqueTab.onmouseout = function(){
	tuQuoqueTab.style.background = 'gray';
}

illicitMajorTab.onmouseover = function(){
	illicitMajorTab.style.background = 'orange';
}
illicitMajorTab.onmouseout = function(){
	illicitMajorTab.style.background = 'gray';
}

texasSharpTab.onmouseover = function(){
	texasSharpTab.style.background = 'skyblue';
}
texasSharpTab.onmouseout = function(){
	texasSharpTab.style.background = 'gray';
}

// upon clicking a tab we should see a info bubble dropdown
