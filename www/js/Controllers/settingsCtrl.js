app
    .controller('settingCtrl',function ($scope,$translate) {
        $scope.curlang = $translate.use();
        $scope.changeLanguage = function(key) {
            $translate.use(key);
            $scope.curlang = key;
     };
}) ;