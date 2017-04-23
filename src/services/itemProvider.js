(function () {
	'use strict';

	 var items = [];
	// var items =[
	// 	{'name': 'Et les mistrals gagnants', 'category_id': 1},
	// 	{'name': 'Lion', 'category_id': 1},
	// 	{'name': 'Patients', 'category_id': 1}
	// ];

	angular.module('collectify')
	.service('itemProvider', function($firebaseArray){

		var sync = firebase.database().ref().child("items");
		items = $firebaseArray(sync);
	 	//sync.set(items);

		this.getItems = function(){
			return items;
		};
		this.create = function(item){
			items.$add(item);
		};
		this.update = function(item){
			items.$save(item);
		};	
		this.remove = function(item){
			items.$remove(item);
		};
	});
}());