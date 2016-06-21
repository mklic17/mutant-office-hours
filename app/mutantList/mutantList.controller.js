(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);


  MutantListController.$inject=['$firebaseArray'];

  function MutantListController($firebaseArray) {
    var vm = this; //vm is the alias for the controller
    var mutantsRef = firebase.database().ref().child('mutants');

    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(mutantsRef);
    vm.newMutant = new Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;


  function Mutant() {
    this.name = '';
    this.phone='';
    this.topic = '';
    this.notified = false;
    this.compelte = false;
  }

  function addMutant() {
    vm.mutants.$add(vm.newMutant); //$add will push to our local copy and to the database
    vm.newMutant = new Mutant();
  }

  function deleteMutant(mutant) {
    vm.mutants.$remove(mutant); // list of mutants and delete this specific mutant
  }

  function toggleComplete(mutant) {
    vm.mutants.$save(mutant); // just need to save it to the database because it already is saved locally
  }

}


})();
