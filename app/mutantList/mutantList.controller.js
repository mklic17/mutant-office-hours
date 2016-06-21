(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);


  MutantListController.$inject=['$firebaseArray'];

  function MutantListController($firebaseArray) {
    var vm = this; //vm is the alias for the controller
    var rootRef = firebase.database().ref();

    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(rootRef);
    vm.newMutant = new Mutant();


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

}


})();
