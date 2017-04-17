'use strict';

app.config(
	function($locationProvider,$routeProvider){
		$locationProvider.hashPrefix(''); // version 1.6 de angular
		$routeProvider
			.when('/items/', {
				controller: 'itemList as List',
				templateUrl: "views/item/list.html"
			})
			.when('/categories/', {
				controller: 'categoryList as catList',
				templateUrl: "views/category/list.html"
			})
			.when('/items/new/', {
				controller: 'itemCreate as create',
				templateUrl: "views/item/create.html"
			})
	}
);