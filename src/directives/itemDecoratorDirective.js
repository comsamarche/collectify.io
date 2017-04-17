'use strict';

app.directive('decorateItem', function(){
	return{
		template: 'Item: "{{ item.name }}" dans la catégorie "{{ item.category_id }}"'
	}
});