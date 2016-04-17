(function(){

   angular
      .module('app')
      .controller('PostCreateCtrl', PostCreateCtrl);

   PostCreateCtrl.$inject = ['$scope', '$meteor'];

   function PostCreateCtrl($scope, $meteor) {
      $scope.savePost = savePost;
      $scope.error = '';
      $scope.success = '';
      $scope.newPost = {
         name: '',
         content: '',
         users: [],
         image: ''
      }
      function savePost() {
         $meteor.call('insertPost', $scope.newPost).then(
           function(data){
             $scope.success = "Post successfully added.";
           },
           function(err){
             $scope.error = 'Une erreur est survenue pendant la mise à jour - ' + err;
           }
         );
      }

   }

})();
