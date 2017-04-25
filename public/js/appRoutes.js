angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/wip.html',
            controller: 'MainController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/meist', {
            templateUrl: 'views/meist.html',
            controller: 'MeistController'
        })

        .when('/programm', {
            templateUrl: 'views/programm.html',
            controller: 'ProgrammController'
        })
        .when('/piletid', {
            templateUrl: 'views/piletid.html',
            controller: 'PiletidController'
        })
        .when('/asukoht', {
            templateUrl: 'views/asukoht.html',
            controller: 'AsukohtController'
        })
        .when('/transport', {
            templateUrl: 'views/transport.html',
            controller: 'TransportController'
        })
        .when('/toitlustus', {
            templateUrl: 'views/toitlustus.html',
            controller: 'ToitlustusController'
        })
        .when('/majutus', {
            templateUrl: 'views/majutus.html',
            controller: 'MajutusController'
        })
        .when('/vaba-aeg', {
            templateUrl: 'views/vaba-aeg.html',
            controller: 'VabaAegController'
        })
        .when('/press', {
            templateUrl: 'views/press.html',
            controller: 'PressController'
        })
        .when('/partnerid', {
            templateUrl: 'views/partnerid.html',
            controller: 'PartneridController'
        })
        .when('/kontakt', {
            templateUrl: 'views/kontakt.html',
            controller: 'KontaktController'
        });

    $locationProvider.html5Mode(true);

}]);