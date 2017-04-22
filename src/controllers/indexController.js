'use strict';

app
	.controller('IndexController', function($rootScope, userProvider , itemProvider, Auth){
		var Index = this;

		Index.session = Auth;
		Index.session.$onAuthStateChanged(function(firebaseUser) {
	      Index.firebaseUser = firebaseUser;
	    });

		Index.auth = function (user){
			userProvider.authUser(user);
		}

		Index.logout = function (){
			userProvider.logout();
		}		

		Index.items = itemProvider.getItems();

	})
;