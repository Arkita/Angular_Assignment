app.controller('assignment2Controller', function($scope) {
    $scope.fact=1;
      $scope.zero=1;
        $scope.negative=-1;
    $scope.doSquare = function() {
        $scope.answer = $scope.number * $scope.number;
    }

    $scope.doCube = function() {
        $scope.answer = $scope.number * $scope.number*$scope.number;
    }
    $scope.factorial =function() {
  if($scope.number<0)
  {
      $scope.answer=-1;
  }
    else if($scope.number==0)
  {
      $scope.answer=1;
  }
  else
  {
      for($scope.i=1;$scope.i<=$scope.number;$scope.i++)
      {
        $scope.fact=$scope.fact*$scope.i;  
      }
    $scope.answer=$scope.fact;
  }
    }
});

