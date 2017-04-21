'use strict';

app.service('userProvider', function($firebaseAuth, Auth){

	//var Auth = $firebaseAuth();
	this.message = null;
	this.error = null;

	// Create a new user
	Auth.$createUserWithEmailAndPassword("guinaudeau.christine@neuf.fr", "MarchecG31")
		.then(function(firebaseUser) {
		  console.log("User created with uid: " + firebaseUser.uid);
		}).catch(function(error) {
		  this.error = error;
	});

});