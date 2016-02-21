var app =angular.module('myRoutes',['ngRoute']);

app.config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/signin', {
                templateUrl: 'templates/signin/signin.html',
                controller:'SignInController'
            })
            .when('/signup', {
                templateUrl: 'templates/signup/signup.html',
                controller:'SignUpController'
            })
            .when('/hospital/list', {
                templateUrl: 'templates/hospital/listhospital.html',
                controller:'HospitalController',
                resolve:{
                         hospitals:function(Hospital){return Hospital.all();}
                }         
            })
             .when('/hospital/edit/:id', {
                templateUrl: 'templates/hospital/edithospital.html',
                controller:'HospitalFormController',
               resolve:{
                     hospital:function(Hospital, $route){return Hospital.getById($route.current.params.id);} 
                }       
            })
             .when('/hospital/new', {templateUrl:'templates/hospital/edithospital.html', 
             controller:'HospitalFormController', 
             resolve:{
                hospital:function(Hospital){return new Hospital();}
            }})
            
            
            .otherwise({
                redirectTo: '/'
            });
    }]);
    
app.constant('MONGOLAB_CONFIG',{API_KEY:'BCaBItz--yD8DdK4yHQf99-_pyZz4PAk', DB_NAME:'koding2016healthcare'})
