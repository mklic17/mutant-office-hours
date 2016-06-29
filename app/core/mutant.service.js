(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('mutantService', mutantService);

    mutantService.$inject = ['$firebaseArray', 'firebaseDataService'];

    function mutantService($firebaseArray, firebaseDataService) {
      var mutants = null;

      var service = {
        Mutant: Mutant,
        mutantsByUser: mutantsByUser,
        reset: reset,
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

      function mutantsByUser(uid) {
        if(!mutants){
          mutants = $firebaseArray(firebaseDataService.users.child(uid).child('mutants'));
        }
        return mutants;
      }

      function reset() {
        if(mutants){
          mutants.$destroy();
          mutants = null;

        }
      }


    }

})();
