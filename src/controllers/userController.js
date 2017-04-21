'use strict';

app
	.controller('UserController', function(userProvider){
		var user = this;
		user.create = function(user){
			userProvider.createUser(user.email, user.password);
		}
	})
;