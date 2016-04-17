angular.module('app').directive('gtMenu', function () {
 return {
   restrict: 'C',
   link: function(scope, element, state) {
     element.on('click', function(event) {
       event.preventDefaults;
       var link = $(event.currentTarget);
      link
         .addClass('selected-menu')
         .siblings('li')
         .removeClass('selected-menu')

      $('#content-sidebar').find('li')
        .removeClass('selected-sub-menu')

        $('#content-sidebar').find('ul')
          .each(function(){
            $(this).find('li').first().addClass('selected-sub-menu')
          })
     });
   }
 };
});
