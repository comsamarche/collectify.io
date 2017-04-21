'use strict';

app
	.controller('CreateUserController', function(userProvider){
		var user = this;
		user.create = function(user){
			userProvider.createUser(user.email, user.password);
		}

	})
;