'use strict';

app.service('userProvider', function($firebaseAuth, Auth){

	// Create a new user
	this.createUser = function(email, password){
		Auth.$createUserWithEmailAndPassword(email, password)
			.then(function(firebaseUser) {
			  console.log("User created with uid: " + firebaseUser.uid);
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
		});
	}

	// Verif user
	this.authUser = function(user){

		Auth.$signInWithEmailAndPassword(user.email, user.password)
		.then(function(authData) {
		  console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
		  console.error("Authentication failed:", error);
		});
	}

});