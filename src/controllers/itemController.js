(function () {
	'use strict';

	angular.module('collectify')
		.controller('ItemIndexController', function(itemProvider, userProvider){
			var ItemI = this;

			ItemI.items = itemProvider.getItems();

		})

		.controller('ItemListController', function($rootScope, itemProvider, $location){
			var List = this;

			List.items = itemProvider.getItems();
			List.removeItem = function(item){
				itemProvider.remove(item);
			};
			List.editItem = function(item){
				$rootScope.itemToEdit = item;
				//console.log($rootScope.itemToEdit);
				$location.url('/items/edit/');
			};

		})

		.controller('ItemCreateController', function(categoryProvider, itemProvider, $location){
			var i = this;
			//console.log('create');
			i.categories = categoryProvider.getCategories();
			i.save = function(item){
				//console.log(item);
				itemProvider.create(item);
				$location.url('/items/');
			};

		})

		.controller('ItemEditController', function($rootScope, categoryProvider, itemProvider, $location){
			var i = this;
			//console.log($rootScope.itemToEdit);
			i.categories = categoryProvider.getCategories();
			i.item = $rootScope.itemToEdit;

			i.save = function(item){
				itemProvider.update(item);
				$location.url('/items/');
			};

		})	
	;
}());