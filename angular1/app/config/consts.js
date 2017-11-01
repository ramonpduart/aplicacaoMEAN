angular.module('primeiraApp').constant('consts', {
  appName: 'Easy Economy',
  version: '1.0',
  owner: 'Ramon Duarte',
  year: '2017',
  site: '#',
  apiUrl: 'http://localhost:3003/api',
  oapiUrl: 'http://localhost:3003/oapi',
  userKey: '_scf_user'
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
