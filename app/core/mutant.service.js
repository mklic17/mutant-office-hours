(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

    mutantService.$inject = ['$firebaseArray', 'firebaseDataService'];

    function mutantService($firebaseArray, firebaseDataService) {
      var service = {
        Mutant: Mutant,
        mutants: $firebaseArray(firebaseDataService.mutants),

      };

      return service;

      /////////////////////

      // Mutant Constructor
      function Mutant() {
        this.name = '';
        this.phone='';
        this.topic = '';
        this.notified = false;
        this.compelte = false;
      }



    }

})();
