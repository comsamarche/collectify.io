(function () {
	'use strict';

	angular.module('collectify')
	.directive('decorateCategory', function(){
		return{
			templateUrl: '/views/category/directive/decorator.html',
			restrict: 'E'
		};
	});
}());