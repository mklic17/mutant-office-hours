(function() {
  'use strict';

  angular
    .module('mutantApp.core')
    .factory('textMessageService', textMessageService);

  textMessageService.$inject = ['firebaseDataService'];

  function textMessageService(firebaseDataService) {
    var service = {
      sendText: sendText,
    };

    return service;

      ///////////////////////////

      // This function takes a single mutant as a parameter and an array of mutants, and creates a newText object using the mutants,
      // name, topic, and phone number. Then the newText object is pushed to firebase, setting notified to true
      // and then saving the mutant to the database.
    function sendText(mutant, mutants) {
      var newText = {
        name: mutant.name,
        topic: mutant.topic,
        phoneNumber: mutant.phone
      };
      firebaseDataService.texts.push(newText);
      mutant.notified = true;
      mutants.$save(mutant);
    }
  }
})();
