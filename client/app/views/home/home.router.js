'use strict';

(function() {

  angular
    .module('blueprint')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.home', {
          url: '/',
          templateUrl: 'app/views/home/home.view.html',
          controller: 'HomeCtrl',
          controllerAs: 'HomeCtrl',
          title: 'home'
        });
    });

}());
