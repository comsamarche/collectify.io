describe('CategoryIndexController', function() {

	/**
	* Debugg by sources : http://stackoverflow.com/questions/28456747/how-to-test-john-papa-vm-model-unit-testing-with-jasmine
	*/

	var Index; 	
   //chargement des modules avant chaque test
   beforeEach(function(){
      module('collectify');    
      module('ngRoute');
      module('underscore');
     module('firebase');
   });

   // création du contexte avant chaque test
   beforeEach(inject(function(_$controller_){
      $scope = {};
      $controller = _$controller_;
      Index = $controller('CategoryIndexController', {}, {});
   }));


    it('should have Index.model defined and testController.Index.model is equal to controllerAs Index test', function () {

        // catI=this in controller
        expect(Index)
            .toBeDefined();   
        expect(Index.firebaseUser)
            .toBeUndefined();      
    });

});