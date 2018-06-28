// module implementation
var demoApp = angular.module("demo", ['ngRoute']);

// routeprovider service
demoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/viewInterns', {
        templateUrl: 'viewInterns.html',
    }).when('/index', {
        templateUrl: 'index.html',
    }).otherwise({
        redirectTo: '/index'
    });
}]);


demoApp.filter('putDecimal', function() {
    return function(number) {
        if(isNaN(number) || number < 1){
            return number
        }else{
            return number + '.00'
        }
    };
});

// scope controller implementation
demoApp.controller('internGrades', function ($scope) {
    $scope.internList = [
        {
            Intern: {
                firstName: 'Mukolwe',
                lastName: ' michael'
            },
            points: 322,
            tribe: "Luhya"
        },
        {
            Intern: {
                firstName: 'emanuell',
                lastName: ' Obama'
            },
            points: 400,
            tribe: "Kikuyu"
        },
        {
            Intern: {
                firstName: 'okoli',
                lastName: 'Joe'
            },
            points: 220,
            tribe: "Mkamba"
        },
        {
            Intern: {
                firstName: 'willian',
                lastName: 'Kevo'
            },
            points: 550,
            tribe: "Tribeless"
        }
    ];
});