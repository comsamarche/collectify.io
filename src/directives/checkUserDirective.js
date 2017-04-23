'use strict';

app.directive('checkUser',[ '$rootScope', '$location', 'Auth', function($root, $location, Auth){

	return{
		link: function(){
			$root.$on('$routeChangeStart', function(event, currRoute){
				var auth = Auth.$getAuth();
				$root.auth = auth;
				//console.log(Auth.$getAuth());

				if(currRoute.access && !currRoute.access.isFree && !auth){
					$location.url('/');
					event.preventDefault();
				}
				
			});
		}
	}

}]);