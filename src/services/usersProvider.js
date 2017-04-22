'use strict';

app.service('userProvider', function($rootScope , $firebaseAuth, Auth){

	// Create a new user
	this.createUser = function(email, password){
		Auth.$createUserWithEmailAndPassword(email, password)
			.then(function(firebaseUser) {
			  console.log("User created with uid: " + firebaseUser.uid);
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
		});
	}

	// Check authentification
	this.authUser = function(user){

		Auth.$signInWithEmailAndPassword(user.email, user.password)
		.then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		  return authData;
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		  return user;
		});			
	}

	// Return authentification
	this.getAuth = function(user){
		var authData = Auth.$getAuth();
		if (authData) {
		  console.log("Is Logged as:", authData.email);	
		  return authData;
		} else {
		  console.log("Logged out");
		}
	}

	// // Logout
	this.logout = function(){
		Auth.$signOut().then(function() {
		  console.log('Signed Out');
		}, function(error) {
		  console.error('Sign Out Error', error);
		});
	}


});