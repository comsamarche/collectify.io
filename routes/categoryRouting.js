'use strict';

app.config(
	function($locationProvider,$routeProvider){
		$locationProvider.hashPrefix(''); // version 1.6 de angular
		$routeProvider
			.when('/', {
				controller: 'ItemIndexController as ItemI',
				templateUrl: "views/item/index.html"
			})
			.when('/items/', {
				controller: 'ItemListController as List',
				templateUrl: "views/item/list.html"
			})
			.when('/items/new/', {
				controller: 'ItemCreateController as i',
				templateUrl: "views/item/create.html"
			})			
			.when('/items/edit/', {
				controller: 'ItemEditController as i',
				templateUrl: "views/item/create.html"
			})
			.when('/categories/', {
				controller: 'CategoryListController as catList',
				templateUrl: "views/category/list.html"
			})
			.when('/categories/new/', {
				controller: 'CategoryCreateController as catCreate',
				templateUrl: "views/category/create.html"
			})
	}
);