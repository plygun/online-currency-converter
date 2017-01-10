export class MainController {
  constructor ($scope, Currencies) {
    'ngInject';

    $scope.currencies = Currencies;
  }

}
