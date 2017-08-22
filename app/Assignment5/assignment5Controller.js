
  app.controller("assignment5Controller", function ($scope) {
 $scope.names = ["Indore", "Pune", "Mumbai"];
$scope.master = {firstName:"", lastName:"",email:"", phonenumber:"" };
 $scope.reset = function() {
   {
    $scope.master = {};
      
        $scope.user = angular.copy($scope.master);  
       
    }
    $scope.reset();
 };
    $scope.userArray = [];
    $scope.user = {};
    console.log($scope.userArray);
    $scope.submitForm = function(isValid){
      
        if(isValid){
            $scope.userArray.push($scope.user.firstName);
            $scope.userArray.push($scope.user.lastName);
            $scope.userArray.push($scope.user.email);
            $scope.userArray.push($scope.user.phonenumber);
            $scope.userArray.push($scope.user.Gender);
            $scope.userArray.push($scope.user.selectedName);
        }
        console.log($scope.userArray);
    };

   
 });