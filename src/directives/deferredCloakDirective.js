(function () {
	'use strict';

	angular.module('collectify')
	.directive('deferredCloak', function(){
		return{
			restrict:'A',
			link: function(scope, element, attrs){
				//console.log('toto');
				attrs.$set('deferredCloak', undefined);
				element.removeClass('deferred-cloak');
			}
		};
	});
}());