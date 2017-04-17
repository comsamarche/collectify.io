'use strict';

app
	.controller('itemIndex', function(){
		var itemI = this;

	})
	.controller('itemList', function(itemProvider){
		var List = this;
		List.items = itemProvider.getItems();
	})
	.controller('itemCreate', function(categoryProvider, itemProvider){
		var create = this;
		create.categories = categoryProvider.getCategories();
		create.items = itemProvider.getItems();
		create.createItem = function(item){
			create.items = itemProvider.create(item);
		}

	})
	.controller('itemRemove', function(){
		var itemRemove = this;

	})
;