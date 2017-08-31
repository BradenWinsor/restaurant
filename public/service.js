angular.module('foodApp').service('foodService', function($http){
  
this.addDish = function(addDish) {
    return $http({
        method: 'POST',
        url: '/api/addDish',
        data: addDish
    })
}

})
