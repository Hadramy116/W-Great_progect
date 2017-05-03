
app.service('phoneService',function($http){

        this.postData = function(phone){
            $http.post(
                    'http://localhost:43442/api/mobile',
                    JSON.stringify(phone),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                ).success(function (data) {
                    console.log(data);
                }).error(function(err){
                    console.log("connexion n'est pas etablie !!");
                });
         };
});