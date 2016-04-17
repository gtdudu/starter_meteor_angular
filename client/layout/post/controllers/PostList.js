(function(){

   angular
      .module('app')
      .controller('PostListCtrl', PostListCtrl);

   PostListCtrl.$inject = ['$scope', '$meteor'];

   function PostListCtrl($scope, $meteor) {
      $scope.$meteorSubscribe('post').then(function() {
         $scope.posts = $scope.$meteorCollection(function() {
            return Post.find({});
         });
      });
      $scope.yup = yup;

      function yup() {
         console.log(this);
      }
   }

})();

//
// $scope.$meteorSubscribe('getPopularPosts',  _.defaults(DEFAULT_QUERY_OPTIONS, limit: 5).then(-> {
//       $scope.posts = $scope.$meteorCollection(->
//           Posts.find();
//       )
// })
