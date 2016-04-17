(function(){

   angular
      .module('app')
      .controller('PostViewCtrl', PostViewCtrl);

   PostViewCtrl.$inject = ['$scope', '$meteor', '$stateParams'];

   function PostViewCtrl($scope, $meteor, $stateParams) {
      $scope.$meteorSubscribe('post', $stateParams.id).then(function(){
         $scope.post = $scope.$meteorObject(Post, $stateParams.id, false);
      })

   }

})();
