(function() {
  'use strict';

  angular.module('mutantApp',[
    // Angular Modules
    'ui.router',

    // Third Party Modules
    'firebase',

    // Custom Modules
    'mutantApp.home',
    'mutantApp.mutantList',
    'mutantApp.auth',
    'mutantApp.core',
  ]);
})();
