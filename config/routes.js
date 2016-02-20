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
            
            .when('/medication/list', {
				templateUrl: 'templates/medication/listmedication.html',
                controller:'MedicationController',
                resolve:{
                         medications:function(Medication){return Medication.all();}
                }         
			})
            
              .when('/medication/edit/:id', {
				templateUrl: 'templates/medication/editmedication.html',
                controller:'MedicationFormController',
               resolve:{
                     medication:function(Medication, $route){return Medication.getById($route.current.params.id);},
                     dealers:function(Dealer){return Dealer.all();}
                }       
			})
             .when('/medication/new', {templateUrl:'templates/medication/editmedication.html', 
             controller:'MedicationFormController', 
             resolve:{
                medication:function(Medication){return new Medication();},
                dealers:function(Dealer){return Dealer.all();}
            }})
            
            .when('/dealer/list', {
				templateUrl: 'templates/dealer/listdealer.html',
                controller:'DealerController',
                resolve:{
                         dealers:function(Dealer){return Dealer.all();}
                }  
			})
            
              .when('/dealer/edit/:id', {
				templateUrl: 'templates/dealer/editdealer.html',
                controller:'DealerFormController',
               resolve:{
                     dealer:function(Dealer, $route){return Dealer.getById($route.current.params.id);
                     
                     },
                     medications:function(Medication){return Medication.all();}
                     
                }       
			})
             .when('/dealer/new', {templateUrl:'templates/dealer/editdealer.html', 
             controller:'DealerFormController', 
             resolve:{
                dealer:function(Dealer){return new Dealer();},
                medications:function(Medication){return Medication.all();}
            }})
            
			.otherwise({
				redirectTo: '/'
			});
	}]);
    
app.constant('MONGOLAB_CONFIG',{API_KEY:'BCaBItz--yD8DdK4yHQf99-_pyZz4PAk', DB_NAME:'koding2016healthcare'})
