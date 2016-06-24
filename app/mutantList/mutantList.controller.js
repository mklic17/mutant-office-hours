(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);


  MutantListController.$inject=['mutantService', 'textMessageService', 'user'];

  function MutantListController(mutantService, textMessageService, user) {
    var vm = this; //vm is the alias for the controller

    vm.addMutant = addMutant;
    vm.mutants = mutantService.mutantsByUser(user.uid);
    vm.newMutant = mutantService.Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

    // This function takes adds a mutant to the database from the text typed in the input boxes
  function addMutant() {
    vm.mutants.$add(vm.newMutant); //$add will a new object to the local copy and to the database
    vm.newMutant = new mutantService.Mutant();
  }

    // This function takes a single mutant as a parameter and removes it from the database
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
