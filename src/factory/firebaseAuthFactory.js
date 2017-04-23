(function () {
	'use strict';
	
	angular.module('collectify')
	.factory('Auth', function($firebaseAuth) {
	  return $firebaseAuth(); // assumes firebaseAuth been load on the page
	});

}());