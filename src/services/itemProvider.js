'use strict';

var items =[
	{'name': 'Et les mistrals gagnants', 'category_id': 1},
	{'name': 'Lion', 'category_id': 1},
	{'name': 'Patients', 'category_id': 1}
];

app.service('itemProvider', function(){
	this.getItems = function(){
		return items;
	}
	this.create = function(item){
		items.push(item);
		return items;
	}
})