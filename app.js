var app = angular.module('parallaxJs', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

app.directive('parallax', ["$document", "$window", function($document, $window){
  return {
    restrict: 'A',
    scope: {
      paratype: '@',
      move: '@',
      startX: '@x',
      startY: '@y'
    },
    link: function (scope, element, attrs){
      var startX = parseInt(scope.startX), startY = parseInt(scope.startY), x = 0, y = 0;
      var moveBy = scope.move, type = scope.paratype;
      
      element.css({
        position: 'absolute',
        left: startX + "px",
        top: startY + "px",
      });
    
      setInterval(function printStyle() {
      //  console.log(element[0].style.cssText);
      //  console.log("X: " + element[0].style.left, "Y: " + startY);
      },10000);
      
      function mouseMove(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        
        x = moveBy * (0.5 * $window.innerWidth - mouseX) + startX;
        
        element.css({
          left: x + 'px',
        });

      }
  
      function scrollMove(){
        var scrollY = $document[0].body.scrollTop;
        console.log(scrollY);
        var y = startY - (moveBy * scrollY);
        console.log(element[0].style.top, "y: " + y);
        element.css({
          top: y + 'px',
        });
      }
    
      if(type === "mousemove") {
        $document.on("mousemove", mouseMove);
      }else if(type == "pagescroll") {
        $document.on("scroll", scrollMove);
      }
    }
    
  };

}]);

