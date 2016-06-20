(function() {
  'use strict';

  angular
    .module('mutantApp.home') // gets the module
    .config(configFunction); // says that we would to like to configure it

    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider){
        $stateProvider.state('home', {
          url: '/',
          templateUrl: 'app/home/home.html',

        }); // (name of the state, object {url, what to render})
    }

})();
