angular.module("foodApp", ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

   $urlRouterProvider.otherwise('home');

     $stateProvider
         .state('home', {
                url: "/home",
                templateUrl: './home.html'
                               })

         .state('about', {
           url: '/about',
            templateUrl: 'about.html'
                          })

         .state('order', {
            url: '/order',
            templateUrl: 'order.html',
            // controller: 'ordercontroller'
                          })
        .state('admin', {
          url: '/admin',
          templateUrl: 'admin.html'
        })

         .state('menu', {
           url: '/menu',
            templateUrl: 'menu.html',
            controller: 'foodController'
                         })

                         jQuery('option').mousedown(function(e) {
                             e.preventDefault();
                             jQuery(this).toggleClass('selected');

                             jQuery(this).prop('selected', !jQuery(this).prop('selected'));
                             return false;
                         })


                       });
