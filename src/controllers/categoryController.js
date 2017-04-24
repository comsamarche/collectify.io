(function () {
	'use strict';

	angular
		.module('collectify')
		.controller('CategoryIndexController', function(){
			var catI = this;

			// Test unitaire
			catI.salut = "Salut !";
			catI.direBonjour = function(){
				return "Salut !";
			};

		})
		.controller('CategoryListController', function(categoryProvider){
			var catList = this;
			catList.categories = categoryProvider.getCategories();
			catList.removeCat = function(category){
				categoryProvider.remove(category); 
			};
		})
		.controller('CategoryCreateController', function(categoryProvider){
			var catCreate = this;
			catCreate.categories = categoryProvider.getCategories();
			catCreate.createCategory = function(category){
				categoryProvider.create(category);
			};
		})
	;
}());