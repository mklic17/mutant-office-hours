(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);


  MutantListController.$inject=['$firebaseArray'];

  function MutantListController($firebaseArray) {
    var vm = this; //vm is the alias for the controller
    var mutantsRef = firebase.database().ref().child('mutants');
    var textsRef = firebase.database().ref().child('text');

    vm.addMutant = addMutant;
    vm.mutants = $firebaseArray(mutantsRef);
    vm.newMutant = new Mutant();
    vm.deleteMutant = deleteMutant;
    vm.toggleComplete = toggleComplete;
    vm.sendText = sendText;

      // Mutant Constructor
  function Mutant() {
    this.name = '';
    this.phone='';
    this.topic = '';
    this.notified = false;
    this.compelte = false;
  }

    // This function takes adds a mutant to the database from the text typed in the input boxes
  function addMutant() {
    vm.mutants.$add(vm.newMutant); //$add will a new object to the local copy and to the database
    vm.newMutant = new Mutant();
  }

    // This function takes a single mutant as a parameter and removes it from the database
  function deleteMutant(mutant) {
    vm.mutants.$remove(mutant);
  }

    // This function takes a single mutant as a parameter and will save it to the database
  function toggleComplete(mutant) {
    vm.mutants.$save(mutant); // just need to save it to the database because it already is saved locally
  }

    // This function takes a signle mutant as a parameter, and creates a newText object using the mutants,
    // name, topic, and phone number. Then the newText object is pushed to firebase, setting notified to true
    // and then saving the mutant to the database.
  function sendText(mutant) {
    var newText = {
      name: mutant.name,
      topic: mutant.topic,
      phoneNumber: mutant.phone,
    };
    textsRef.push(newText);
    mutant.notified = true;
    vm.mutants.$save(mutant);
  }


}


})();
