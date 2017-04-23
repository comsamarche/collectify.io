(function () {
'use strict';

	angular
	.module('collectify')
	.config(categoryRouting);

	function categoryRouting ($locationProvider,$routeProvider){
			$locationProvider.hashPrefix(''); // version 1.6 de angular
			$routeProvider
				.when('/', {
					controller: 'IndexController as Index',
					templateUrl: "views/index/index.html",
					access: {
						isFree: true
					}
				})
				.when('/create-user', {
					controller: 'UserController as user',
					templateUrl: "views/index/createUser.html",
					access: {
						isFree: true
					}
				})			
				.when('/items', {
					controller: 'ItemListController as List',
					templateUrl: "views/item/list.html",
					access: {
						isFree: false
					}
				})
				.when('/items/new', {
					controller: 'ItemCreateController as i',
					templateUrl: "views/item/create.html",
					access: {
						isFree: false
					}
				})			
				.when('/items/edit', {
					controller: 'ItemEditController as i',
					templateUrl: "views/item/create.html",
					access: {
						isFree: false
					}
				})
				.when('/categories', {
					controller: 'CategoryListController as catList',
					templateUrl: "views/category/list.html",
					access: {
						isFree: false
					}
				})
				.when('/categories/new', {
					controller: 'CategoryCreateController as catCreate',
					templateUrl: "views/category/create.html",
					access: {
						isFree: false
					}
				})
		};

}());