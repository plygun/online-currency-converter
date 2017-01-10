describe('directive converter', function() {
  let vm;
  let element;

  beforeEach(angular.mock.module('onlineConverter'));

  beforeEach(inject(($compile, $rootScope) => {

    element = angular.element('<app-converter></app-converter>');

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope().vm;
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });
});
