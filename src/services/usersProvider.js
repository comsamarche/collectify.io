'use strict';

app.service('userProvider', function($firebaseAuth, Auth){


	//var Auth = $firebaseAuth();
	this.message = null;
	this.error = null;

	// Create a new user
	this.createUser = function( mail, password){
		Auth.$createUserWithEmailAndPassword(mail, password)
			.then(function(firebaseUser) {
			  console.log("User created with uid: " + firebaseUser.uid);
			}).catch(function(error) {
			  this.error = error;
		});
	}

});