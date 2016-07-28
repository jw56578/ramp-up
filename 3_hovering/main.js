// TODO: Experiment with hover effects to make dynamic looking features

var tuQuoqueTab = document.getElementById("tuQuoqueTab");
var illicitMajorTab = document.getElementById("illicitMajorTab");
var texasSharpTab = document.getElementById("texasSharpTab");

// we use the onmouseover & onmouseout js functions on our html element, hover requires jQuery
tuQuoqueTab.onmouseover = function(){
	tuQuoqueTab.style.background = 'red';
	tuQuoqueDropdown.style.display = 'block';
}
tuQuoqueTab.onmouseout = function(){
	tuQuoqueTab.style.background = 'lightgray';
	tuQuoqueDropdown.style.display = 'none';
}

illicitMajorTab.onmouseover = function(){
	illicitMajorTab.style.background = 'orange';
	illicitMajorDropdown.style.display = 'inline-block';
}
illicitMajorTab.onmouseout = function(){
	illicitMajorTab.style.background = 'lightgray';
	illicitMajorDropdown.style.display = 'none';
}

texasSharpTab.onmouseover = function(){
	texasSharpTab.style.background = 'skyblue';
	texasSharpDropdown.style.display = 'inline-block';
	texasSharpDropdown.style.float = 'right';
}
texasSharpTab.onmouseout = function(){
	texasSharpTab.style.background = 'lightgray';
	texasSharpDropdown.style.display = 'none'
}

// during onmouseover create a dropdown info feature
