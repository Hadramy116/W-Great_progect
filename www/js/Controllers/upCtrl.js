angular.module('starter.controllers', ['pascalprecht.translate'])
app.controller('upCtrl',function($scope,Camera) {
	   $scope.takePicture = function (options) {
    
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;;
      }, function(err) {
         console.log(err);
      });
        
   };
});