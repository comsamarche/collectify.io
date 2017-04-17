'use strict';

app.directive('decorateCategory', function(){
	return{
		template: 'Category {{ key }} : "{{ category.name }}" son id est "{{ category.id }}"'
	}
});