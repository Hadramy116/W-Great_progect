/**
 * Created by EL Hadramy Ahmed on 19/03/2017.
 */
angular.module('starter.controllers', ['pascalprecht.translate'])
app.controller('geoCtrl',function ($scope,$state, $cordovaGeolocation) {
   var counter;
  var options = {timeout: 4000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
});
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
    var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng
    });      
   
    var infoWindow = new google.maps.InfoWindow({
        content: "Je suis la!"
    });
   
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open($scope.map, marker);
    });
   
  });

    var watchOptions ={
      timeout: 2000,
      enableHighAccuracy: true
    };

    watch = $cordovaGeolocation.watchPosition(watchOptions);
    watch.then(
      null,
      function(error){
        console.log('il ya un erreur');
      },
      function(position){
        $scope.position = position;
        /*latLng = new google.maps.latLng(
         position.coords.latitude,
         position.coords.latitude
        );*/
        /*marker = new google.maps.marker({
            position:latLng,
            title: 'position'+(++counter),
            label: 'H',
        });
        marker.setMap(map);*///null pour 
      }
    );

  }, function(error){
    console.log('il ya un erreur');
  });
})  ;

