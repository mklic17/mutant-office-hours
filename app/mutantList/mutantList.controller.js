(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);


  MutantListController.$inject=['mutantService', 'user'];

  function MutantListController(mutantService, user) {
    var vm = this; //vm is the alias for the controller

    vm.mutants = mutantService.mutantsByUser(user.uid);


}

})();
