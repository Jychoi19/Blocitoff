app.controller("SampleCtrl", function($scope, $firebaseObject) {
	var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

	// download the data into a local object
	$scope.data = $firebaseObject(ref)
	
	// putting a console.log here won't work, see below
});