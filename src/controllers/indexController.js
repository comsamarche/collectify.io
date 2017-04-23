(function () {
	'use strict';

	angular.module('collectify')
		.controller('IndexController', function($rootScope, userProvider , itemProvider, Auth){
			var Index = this;

			// Test unitaire
			Index.direBonjour = function(){
				Index.salut = "Salut !";
			};

			Index.firebaseUser = null;

			Index.session = Auth;
			Index.session.$onAuthStateChanged(function(firebaseUser) {
		      Index.firebaseUser = firebaseUser;
		    });

			Index.auth = function (user){
				if(user !== undefined){
					Index.session = userProvider.authUser(user);
				}
				else
				{
					console.log("pas d'utilisateur");
				}
			};

			Index.logout = function (){
				userProvider.logout();
			};		

			Index.items = itemProvider.getItems();

		})
	;

}());