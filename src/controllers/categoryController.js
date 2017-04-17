'use strict';

app
	.controller('categoryIndex', function(){
		var catI = this;

	})
	.controller('categoryList', function(categoryProvider){
		var catList = this;
		catList.categories = categoryProvider.getCategories();

	})
	.controller('categoryCreate', function(){
		var catCreate = this;
		catCreate.test = "toto";

	})
	.controller('categoryRemove', function(){
		var catRemove = this;

	})
;