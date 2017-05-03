(function () {
    'use strict';

    function loginController($rootScope, $timeout, $interval) {
        var vm = this;

        var current_image = 1;
        var max_images = 5;

        $interval(function () {
            jQuery('.bg-image .img').addClass('fadeOut');
            if (current_image == max_images) {
                current_image = 1;
            } else {
                current_image += 1;
            }
            jQuery('.bg-image').css('background-image', jQuery('.bg-image .img').css('backgroundImage'));
            $timeout(function () {
                var img = jQuery('.bg-image .img').css('backgroundImage', 'url(../img/backgrounds/' + current_image + ".jpg)");
                img.removeClass('fadeOut');
            }, 500);

        }, 2000);


        vm.twitterlogin = function () {
            commonService.showLoading('Loading...');

            $timeout(function () {
                commonService.navigate('/home/posts');
            }, 2000);

        }
    };

    app.controller('loginCtrl', loginController);

})();