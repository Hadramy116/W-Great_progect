angular.module('starter.controllers', ['pascalprecht.translate'])

app.controller('homeCtrl',function ($scope,$translate,$http, $location) {
     $scope.curlang = $translate.use();

    $scope.go = function(){
        //$location.url("/Categorie");
        $location.path("/Categorie");
     }
});


                           