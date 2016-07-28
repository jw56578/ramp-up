// TODO: Experiment with hover effects to make dynamic looking features

var tuQuoqueTab = document.getElementById("tuQuoqueTab");
var illicitMajorTab = document.getElementById("illicitMajorTab");
var texasSharpTab = document.getElementById("texasSharpTab");

// we use the onmouseover & onmouseout js functions on our html element, hover requires jQuery
tuQuoqueTab.onmouseover = function(){
	tuQuoqueTab.style.background = 'lightgray';
	//tuQuoqueDropdown.style.display = 'block';
	$(tuQuoqueDropdown).slideToggle('slow') // or slideDown()
	texasSharpDropdown.style.display = 'none';
	illicitMajorDropdown.style.display = 'none';
}
tuQuoqueTab.onmouseout = function(){
	tuQuoqueTab.style.background = 'lightgray';
	//tuQuoqueDropdown.style.display = 'none';
	$(tuQuoqueDropdown).slideToggle('slow') // or slideUp()
}

illicitMajorTab.onmouseover = function(){
	illicitMajorTab.style.background = 'orange';
	illicitMajorDropdown.style.display = 'inline-block';
	tuQuoqueDropdown.style.display = 'none';
	texasSharpDropdown.style.display = 'none';
}
illicitMajorTab.onmouseout = function(){
	illicitMajorTab.style.background = 'lightgray';
	illicitMajorDropdown.style.display = 'none';
}

texasSharpTab.onmouseover = function(){
	texasSharpTab.style.background = 'skyblue';
	texasSharpDropdown.style.display = 'inline-block';
	texasSharpDropdown.style.float = 'right';
	tuQuoqueDropdown.style.display = 'none';
	illicitMajorDropdown.style.display = 'none';
}
texasSharpTab.onmouseout = function(){
	texasSharpTab.style.background = 'lightgray';
	texasSharpDropdown.style.display = 'none'
}

// during onmouseover create a dropdown info feature
