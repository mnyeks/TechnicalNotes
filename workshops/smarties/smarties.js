var findSmartiesByColor = function(smarties, color){
	var smarties = smarties;
	var color = color;

	var smarty = {color: color, qty:0};
	for(var i=0; i < smarties.length; i++){
		if(color==smarties[i].color){
			smarty.qty += smarties[i].qty;
		}

	}
	return smarty;
};

var findMostAbundantSmartie = function(smarties){
	var smarty = {color:"", qty:0};

	for(var i=0; i < smarties.length; i++){
		var current_smarty = smarties[i].qty;

		if(smarty.qty < current_smarty){
			smarty.color = smarties[i].color;
			smarty.qty = smarties[i].qty;
		}

	}
	return smarty;
};

var findSmartiesLessThan = function(smarties,limit){
	var smarties_arr = [];

	for(var i=0; i < smarties.length; i++){
		if(smarties[i].qty < limit){
			smarties_arr.push(smarties[i])
		}
	}
	
	return smarties_arr;

};

var findSmarties = function(smarties){

};

var groupSmarties = function(){

};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
