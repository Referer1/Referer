var ctrl=angular.module("ctrl",[]);
ctrl.controller("list",function($scope,$http){
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/latest",
        method:"get",
        responseType:"json"
    }).then(function (res) {
        console.log(res)
        $scope.data=res.data.stories

    })
});



ctrl.controller("show",function($scope,$http,$routeParams){
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/news/"+$routeParams.id,
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.data=res.data
        console.log(res)
    })
});


ctrl.controller("shouye",function($scope,$http){
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/themes",
        method:"get",
        responseType:"json"
    }).then(function (res) {

        $scope.data=res.data.others

    })
});


ctrl.controller("zhuti",function($scope,$http,$routeParams){
    $http({
        url:"php/api.php?url=http://news-at.zhihu.com/api/4/theme/"+$routeParams.id,
        method:"get",
        responseType:"json"
    }).then(function (res) {
        $scope.data=res.data.stories
    })
    $scope.mr='images/mr.jpg'
});






