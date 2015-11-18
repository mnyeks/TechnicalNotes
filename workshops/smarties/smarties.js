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
		var smarty = smarties[i];

		if(smarty.qty < limit){
			smarties_arr.push(smarty)
		}
	}
	
	return smarties_arr;

};

var findSmarties = function(smarties, func){
	var smartieList =[];
	//func(smarties[i]);
	for(var i=0; i < smarties.length; i++){
		 var smarty = smarties[i];
		// func(smarty);
	 if(func(smarty)){
	 	//func(smarty)
	 	smartieList.push(smarty);

	 }

	}
	return smartieList;
};

// var groupSmarties = function(smartyList){
// 	var smartyMap = {};
	
// 	for(var key in smartyList){
// 	var smarty = smartyList[key];
	
// 		if(smartyMap[smarty.color] == undefined){
// 			smartyMap[smarty.color] =0;
// 		} 
// 		smartyMap[smarty.color] = smartyMap[smarty.color] + 1;

// 	}
// 	console.log(smartyMap);
// 	return smartyMap;
// };

// var sortSmarties = function(){

// };

// var addTotalForTeams = function(){

// };
