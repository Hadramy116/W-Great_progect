angular.module('starter.controllers', ['pascalprecht.translate'])
app.controller('upCtrl',function ($scope,$translate,$http,phoneService) {
     
	 $scope.curlang = $translate.use();

	 //object contient list de marque et model
	 var phoneList = {
		 list: [
				{"id":"1", "marque":"Sumsung", "model":"A5"},
				{"id":"2", "marque":"Sumsung", "model":"S4"},
				{"id":"3", "marque":"Apple", "model":"iphone6"},
				{"id":"4", "marque":"Apple", "model":"iphone5"},
			],
			selectedOption : {"id":"", "marque":"", "model":""}
		 };
	 
	  var villes = {
        list: [
            {id: '1', name: 'nktt'},
            {id: '2', name: 'ndb'},
            {id: '3', name: 'atar'}
        ],
        selectedOption: {id: '3', name: 'nktt'}  
    };

	
	
	$scope.phoneList = phoneList;
	$scope.prix = /^[0-9]{1,}(\.|)[0-9]{0,2}$/g;
	$scope.phoneNumbr = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

     	var phone = {
			"idPhone":null,
				"marque": "",
				"memoire":null ,
				"camera": null,
				"coulleur": '',
				"isDuos": '',
				"isNeuf": "",
				"prix": null,
				"ville": "",
				"email": null,
				"phone1": null,
				"image1": null,
				"image2": null,
				"image3": null,
				"image1": null,
				"model": null,
				"trader_name": null,
				"trader_facebook": null,
				"trader_insta": null,
				"temps": null,
				"img_count": 7,
				"password": null
			};  
	
	//Initialisation
	$scope.phone = phone;
	$scope.villes = villes;
	$scope.addPhone = function(img){
       // fd = new FormData();
		if(!img)
			return;

		phone.image1 = img[0].resized.dataURL;
		phone.image2 = img[1].resized.dataURL;
		phone.image3 = img[2].resized.dataURL;
		phone.image4 = img[3].resized.dataURL;		
		phone.ville = villes.selectedOption.name;
		phone.model = phoneList.selectedOption.model;
		phone.marque = phoneList.selectedOption.marque;
		
		
		console.log(phone);
		
		//Uploading phone data object
        phoneService.postData(phone);
	}
});
