'use strict';

app
	.controller('IndexController', function(itemProvider){
		var Index = this;
		Index.items = itemProvider.getItems();

	})
;