angular.module('main-app', []);
angular.module('main-app').controller('ControllerPrincipal', ControllerPrincipal);

function ControllerPrincipal($scope, $http) {
  $http({
    method: 'GET',
    url: 'http://demo3751465.mockable.io/films'
  }).then(function (response) {
    console.log(response);
    $scope.listaSeries = response.data.films;
  });

  console.log('Una instrucción');
}