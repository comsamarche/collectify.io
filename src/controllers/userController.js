(function () {
	'use strict';

	angular.module('collectify')
		.controller('UserController', function(userProvider){
			var user = this;
			user.create = function(user){
				userProvider.createUser(user.email, user.password);
			}; 
		})
	;
}());