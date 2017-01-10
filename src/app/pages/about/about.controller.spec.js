describe('controllers', () => {
  let vm;

  beforeEach(angular.mock.module('onlineConverter'));

  beforeEach(inject(($controller) => {
    vm = $controller('AboutController');
  }));

});
