angular.module('starter.Routing', ['pascalprecht.translate'])
'use strict'

app.config(function ($translateProvider) {
     $translateProvider.translations('en',translations_en);
     $translateProvider.translations('fr',translations_fr);
     $translateProvider.preferredLanguage('fr');
     $translateProvider.useSanitizeValueStrategy('sanitize');
     //console.log("$translateProvider bien initializer");
})


app.config(function($stateProvider,$urlRouterProvider){
     $stateProvider
         .state('home',{
               url: '/home',
               templateUrl: 'templates/home.html',
              controller:'homeCtrl'
     });
    $stateProvider
        .state('upload',{
            url: '/upload',
            templateUrl: 'templates/upload.html' ,
            controller : 'upCtrl'
        });

     $stateProvider
         .state('geo',{
          url: '/Geolocalisation',
          templateUrl: 'templates/Geo.html',
          controller:'geoCtrl'    

     });

     $stateProvider
         .state('settings',{
              url: '/settings',
              templateUrl: 'templates/settings.html',
              controller:'settingCtrl'

         });

    $stateProvider
         .state('login',{
              url: '/login',
              templateUrl: 'templates/login.html',
              controller:'loginCtrl'

         });

    $stateProvider
         .state('profile',{
              url: '/user',
              templateUrl: 'templates/profile.html',
              controller:'profileCtrl'

         });
    $stateProvider
         .state('cam',{
              url: '/cam',
              templateUrl: 'templates/cam.html',
              controller:'camCtrl'

         });

     //la root  par defaut
     $urlRouterProvider.otherwise('/home')
});