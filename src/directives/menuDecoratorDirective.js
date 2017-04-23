(function () {
	'use strict';

	angular.module('collectify')
	.directive('decorateMenu', function(){
		return{
			templateUrl: '/views/menu/directive/decorator.html',
			restrict:'E'
		};
	});
}());