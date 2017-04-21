'use strict';

var categories =[];
// var categories =[
// 	{'id': 1, 'name': 'films'},
// 	{'id': 2, 'name': 'musiques'},
// 	{'id': 3, 'name': 'tutorials'}
// ];

app.service('categoryProvider', function($firebaseArray){

	var sync = firebase.database().ref().child("categories");
	categories = $firebaseArray(sync);
 	//sync.set(categories);	
	this.getCategories = function(){
		return categories;
	}
	this.create = function(category){
		var lastIndex = categories.length + 1;
		category.id = lastIndex;
		categories.$add(category);
	}	
	this.remove = function(category){
		categories.$remove(category);
	}
})