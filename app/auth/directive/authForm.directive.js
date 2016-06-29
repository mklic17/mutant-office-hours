(function() {
  'use strict';

  angular
  .module('mutantApp.auth')
  .directive('xtAuthForm', xtAuthForm);

  function xtAuthForm() {
    return {
      templateUrl: 'app/auth/directive/authForm.html',
      restrict:'E',
      controller: AuthFormController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        formName: '@',
        submitFunction: '&',
        error: '='
      }
    };
  }

  AuthFormController.$inject = ['authService', "$state"];
  function AuthFormController(authService) {
    var vm = this;


    vm.user = {
      email: '',
      password: ''
    }

  }

})();
