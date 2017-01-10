import { config } from './index.config';
import { routerConfig } from './index.route';
import { MainController } from './pages/main/main.controller';
import { AboutController } from './pages/about/about.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { ConverterDirective } from '../app/components/converter/converter.directive';
import { CurrenciesFactory } from '../app/components/converter/currencies.factory';

angular.module('onlineConverter', ['ngResource', 'ui.router', 'ui.bootstrap'])
    .config(config)
    .config(routerConfig)
    .controller('MainController', MainController)
    .controller('AboutController', AboutController)
    .directive('appNavbar', NavbarDirective)
    .directive('appConverter', ConverterDirective)
    .factory('Currencies', CurrenciesFactory);
