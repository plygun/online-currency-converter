export function routerConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/pages/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/pages/about/about.html',
            controller: 'AboutController',
            controllerAs: 'about'
        });

    $urlRouterProvider.otherwise('/');
}
