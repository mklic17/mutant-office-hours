(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .directive('xtMutantTable', xtMutantTable);

    function xtMutantTable() {
      return {
        templateUrl: 'app/mutantList/directives/mutantTable.html',
        restrict: 'E',
        controller: MutantTableController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          mutants: '='
        },

      };
    }


  MutantTableController.$inject = ['textMessageService'];

  function MutantTableController(textMessageService) {
    var vm = this;
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;


  function deleteMutant(mutant) {
    vm.mutants.$remove(mutant);
  }

    // This function takes a single mutant as a parameter and will save it to the database
  function toggleComplete(mutant) {
    vm.mutants.$save(mutant); // just need to save it to the database because it already is saved locally
  }


  function sendText(mutant) {
    textMessageService.sendText(mutant, vm.mutants);
  }
}

})();
