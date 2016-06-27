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
    'mutantApp.layout',
  ])
  .config(configFunction)
  .run(runFunction);

  configFunction.$inject=['$urlRouterProvider'];

  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  runFunction.$inject = ['$rootScope', '$state'];
  // catch the errors from routing and sends them to the login page
  function runFunction($rootScope, $state){
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if(error === "AUTH_REQUIRED") {
        $state.go('login');
      }
    });
  }

})();
