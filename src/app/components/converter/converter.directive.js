export function ConverterDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/converter/converter.html',
        scope: {
            currencies: '='
        },
        controller: ConverterController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}
class ConverterController {
    constructor ($scope, $http) {
        'ngInject';

        this.fromAmount = null;
        this.fromCurrency = '';
        this.toAmount = null;
        this.toCurrency = '';
        this.errorMessage = '';

        this.exchange = () => {
            $http
                .get('http://api.fixer.io/latest?base=' + this.fromCurrency)
                .then((response) => {
                    if(response.data.rates[this.toCurrency]) {
                        this.toAmount = this.fromAmount * response.data.rates[this.toCurrency];
                        this.errorMessage = '';
                    }
                    else if(this.fromCurrency == this.toCurrency){
                        this.errorMessage = 'Sorry, cannot convert same currencies';
                    }
                    else {
                        this.errorMessage = 'Sorry, cannot convert these currencies';
                    }
                    $scope.$apply();
                })
        };

        $scope.$watchGroup(
            ['vm.fromAmount', 'vm.fromCurrency', 'vm.toCurrency'],
            () => {
                if(this.fromAmount && this.fromCurrency && this.toCurrency){
                    this.exchange();
                }
            });

    }
}
