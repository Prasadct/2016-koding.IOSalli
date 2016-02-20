var app =angular.module('myControllers',['ngTagsInput'])

app.controller('ListController',function(messages){
    
    var self = this;

    self.messages = messages.list;
    
    
});



app.controller('HomeController',function($scope,messages){
    
    var self = this;

    $scope.init = function(){
        
        console.log('This is HomeController');
    };
    
    
    $scope.loadFunction = function(){
        
        console.log('Loading Function Via Directive...');
    };
    
    $scope.getStatus = function(){
        
        var date = new Date();
        console.log(date);
        
    };
    
    $scope.init();
    
    
});



app.controller('UserController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is UserController');
    
   
    
    
});



app.controller('SignInController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is SignIn');
    
    $scope.login = function(user){
        
        console.log('User Registered...');
        console.log($scope.user);
        var currentUser = user;
        if(currentUser.email=='admin@codegen.net' && currentUser.password=='pass'){
            
            console.log('You have successfully logged in');
        }
        $scope.user = {};
        
    };
    
    
});


app.controller('SignUpController',function(messages,$scope,$http){
    
    var self = this;

    self.users = [];
    
    console.log('This is SignUp Controller');
    
    $scope.register = function(){
        
        console.log('User Registered...');
        console.log($scope.user);
        $scope.user = {};
        
    };
    
    
});

///////////////////////////////////////////////////////////////////////////////

/*Entity Controllers Start
* */


/**Hospital Controller Start */

app.controller('HospitalController',function($scope,hospitals,$http,$location){
    
     
    $scope.hospitals = hospitals;
    console.log('Hospital Controller');
    
    
    
   
    
    
   
    
});


app.controller('HospitalFormController',function($scope,hospital,$location,$window){
    
     var hospitalCopy = angular.copy(hospital);
    var changeSuccess = function() {
      console.log('Change Success');  
      $location.path('/hospital/list');
      $window.location.href = '/hospital/list';
    };
    
    var changeError = function() {
      throw new Error('Something went wrong... Please try again.');
    };
    
    $scope.hospital = hospital;
    
    $scope.save = function(){
      $scope.hospital.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError).then(function() {
        $window.location.href = '/#/hospital/list';
    });
    };
    
    $scope.remove = function() {
      $scope.hospital.$remove(changeSuccess, changeError).then(function() {
        $window.location.href = '/#/hospital/list';
    });
    };
    
    $scope.hasChanges = function(){
      return !angular.equals($scope.hospital, hospitalCopy);
    };
    
});


/**Hospital Controller End */



/**Medication Controller Start*/

app.controller('MedicationController',function($scope,medications,$http,$location){
    
     
    $scope.medications = medications;
    console.log('Medication Controller');
    
    
    
   
    
    
   
    
});


app.controller('MedicationFormController',function($scope,medication,dealers,$location,$window){
    
    $scope.dealerList = dealers;
    
     var medicationCopy = angular.copy(medication);
    var changeSuccess = function() {
      console.log('Change Success');  
      $location.path('/medication/list');
      $window.location.href = '/medication/list';
    };
    
    var changeError = function() {
      throw new Error('Something went wrong... Please try again.');
    };
    
    $scope.medication = medication;
    
    $scope.save = function(){
      $scope.medication.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError).then(function() {
        $window.location.href = '/#/medication/list';
    });
    };
    
    $scope.remove = function() {
      $scope.medication.$remove(changeSuccess, changeError).then(function() {
        $window.location.href = '/#/medication/list';
    });
    };
    
    $scope.hasChanges = function(){
      return !angular.equals($scope.hospital, medicationCopy);
    };
    
});

/**Medication Controller End */



/**Dealer Controller Start*/

app.controller('DealerController',function($scope,dealers,$http,$location){
    
     
    $scope.dealers = dealers;
    console.log('Dealer Controller');
    
    
    
   
    
    
   
    
});


app.controller('DealerFormController',function($scope,dealer,medications,$location,$window){
    
    $scope.medicationList = medications;
    var dealerCopy = angular.copy(dealer)
    var changeSuccess = function() {
      console.log('Change Success');  
      $location.path('/dealer/list');
      $window.location.href = '/dealer/list';
    };
    
    var changeError = function() {
      throw new Error('Something went wrong... Please try again.');
    };
    
    $scope.dealer = dealer;
    
    $scope.save = function(){
      $scope.dealer.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError).then(function() {
        $window.location.href = '/#/dealer/list';
    });
    };
    
    $scope.remove = function() {
      $scope.dealer.$remove(changeSuccess, changeError).then(function() {
        $window.location.href = '/#/dealer/list';
    });
    };
    
    $scope.hasChanges = function(){
      return !angular.equals($scope.hospital, dealerCopy);
    };
    
});


/**Dealer Controller End */

/*Entity Controllers End
* */








