var app = angular.module('myApp', [])

app.controller('paginationCtrl', ['$scope', function (scope) {
    var
               	 idList = ['ABCDEFG', 'HIJKLMN', 'NOPQRST', 'UVWXYZS', '1234ADF', '1345ADF', '15564AE'],
                 statusList = ['changed', 'updated', 'deleted', 'in process', 'error'],
                 itemList = ['Medical', 'Dental', 'Short Term Disability', 'Long Term Disability', 'Basic Life', 'Optional Life', 'Dependent Life'],
                 changeAuthorList = ['David Beckham', 'Lionel Messi', 'Steven Gerrard', 'Christiano Ronaldo', 'Thomas Muller', 'Zinedine Zidane', 'Frank Lampard'],
                 dateList = ['13-APR-10', '25-JUL-12', '27-APR-15', '28-JUL-11', '28-MAR-11', '12-AUG-11', '29-AUG-2005']

        	   function createRandomItem() {
                  var
                    id = idList[Math.floor(Math.random() * 4)],
              		status = statusList[Math.floor(Math.random() * 4)],
              		item = itemList[Math.floor(Math.random() * 4)],
              		changeAuthor = changeAuthorList[Math.floor(Math.random() * 4)],
              		date = dateList[Math.floor(Math.random() * 4)]

          		return {
              		id: id,
              		status: status,
              		item: item,
              		changeAuthor: changeAuthor,
              		date: date

	            };
	          }
 		        $scope.itemsByPage=15;
 	 	 	
	              $scope.rowCollection = [];
	              for (var j = 0; j < 200; j++) {
	                  $scope.rowCollection.push(createRandomItem());
	            }
}]);