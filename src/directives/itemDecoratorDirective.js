(function () {
	'use strict';

	angular.module('collectify')
	.directive('decorateItem', function(){
		return{
			templateUrl: '/views/item/directive/decorator.html',
		 	restrict:'E'
		};
	});
}());