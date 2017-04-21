'use strict';

app.config(
	function($locationProvider,$routeProvider){
		$locationProvider.hashPrefix(''); // version 1.6 de angular
		$routeProvider
			.when('/', {
				controller: 'IndexController as Index',
				templateUrl: "views/index/index.html"
			})
			.when('/create-user', {
				controller: 'CreateUserController as user',
				templateUrl: "views/index/createUser.html"
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