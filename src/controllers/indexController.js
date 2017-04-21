'use strict';

app
	.controller('IndexController', function(userProvider , itemProvider){
		var Index = this;

		Index.auth = function auth(Index){
			userProvider.authUser(Index);
		}

		Index.items = itemProvider.getItems();

	})
;