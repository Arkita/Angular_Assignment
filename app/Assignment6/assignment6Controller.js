
app.controller("assignment6Controller", function ($scope) {
    $scope.names = [{
        name: "A",
        cost: "10"
    }, {
        name: "B",
        cost: "20"
    }, {
        name: "C",
        cost: "50"
    }];
    
    $scope.selectedItems = [];
    $scope.value = function (Selected, item,isSelected) {
        if (isSelected == true || Selected==true) {
            $scope.selectedItems.push(item);
        } 
       
        else {
            console.log(item.name);
            angular.forEach($scope.selectedItems, function (itemRmv, $index) {
                if (itemRmv.name == item.name) {
                    $scope.selectedItems.splice($index, 1);
                }
            })
        }
    }
     
});

app.filter('getcost', function () {
    return function (value, property) {
        var total = 0;
        angular.forEach(value, function (val, index) {
            total = total + parseInt(val.cost)
        });
        return total;
    }
});