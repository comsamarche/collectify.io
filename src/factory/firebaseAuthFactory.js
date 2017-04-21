'use strict';
app.factory('Auth', function($firebaseAuth) {
  return $firebaseAuth(); // assumes firebaseAuth been load on the page
});
