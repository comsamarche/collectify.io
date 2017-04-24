describe('CategoryIndexController', function() {

	/**
	* Debugg by sources : http://stackoverflow.com/questions/28456747/how-to-test-john-papa-vm-model-unit-testing-with-jasmine
	*/

	var catI; 	
   //chargement des modules avant chaque test
   beforeEach(function(){
      module('collectify');    
      module('ngRoute');
      module('underscore');
     module('firebase');
   });

   // création du contexte avant chaque test
   beforeEach(inject(function(_$controller_){
      //$scope = $rootScope.$new();
      $scope = {};
      $controller = _$controller_;
      //$controller('IndexController', {'$scope': $scope, 'Index':this});
      catI = $controller('CategoryIndexController', {}, {});
   }));


    it('should have catI.model defined and testController.catI.model is equal to controllerAs catI test', function () {

        // catI=this in controller
        expect(catI)
            .toBeDefined();

	  // Testing primitives
        expect(catI.salut)
            .toBeDefined();
        expect(catI.salut)
            .toEqual('Salut !');            

		// Testing a method
        expect(catI.direBonjour())
            .toBeDefined();    
        expect(catI.salut)
            .toEqual('Salut !');             
    });

});