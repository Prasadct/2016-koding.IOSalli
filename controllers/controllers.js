var app =angular.module('myControllers',['ngTagsInput'])



app.controller('NetworkController',function(dashboards,$scope){
    
    var self = this;
    
    var dashboardItems = dashboards;
    
    var hospitalSet = [];
    
    angular.forEach(dashboardItems,function(value,key){
       
       //console.log(key,value.hospital[0].name); 
       hospitalSet.push({id:key,label:value.hospital[0].name})
    });
    
     $scope.generateDistanceArray = function(data){
        var size = data.length;
        var thisedges =[];
        console.log(size);
        angular.forEach(data,function(value,key){
           
          angular.forEach(data,function(invalue,inkey){
             
                  if(inkey!=key){
                     
                     if(inkey>key){
                        thisedges.push({from:key,to:inkey});
                    }
                     
                  }
          
          });
            
        });
        
        return thisedges;
    };
    


  
    
    
  
    
    
     var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);
    
    var hospitalNodes = new vis.DataSet(hospitalSet);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);
    
    var hospitalEdges = new vis.DataSet($scope.generateDistanceArray(hospitalSet));

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    
    var datahospitals ={
        nodes: hospitalNodes,
        edges: hospitalEdges
    }
    
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, datahospitals, options);
    
    
    
   
     $scope.init = function(){
        
         console.log('Network Controller...');
    };
    
    $scope.init();
    
});


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
    
    $scope.dealerList = [];
   
    angular.forEach(dealers,function(value,key) {
        $scope.dealerList.push({'_id':value._id,'name':value.name});
    });
    
    
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
    
    $scope.medicationList = [];
    
    angular.forEach(medications,function(value,key) {
        $scope.medicationList.push({'_id':value._id,'name':value.name});
    });
    
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




/**Dashboard Controller Start*/

app.controller('DashboardController',function($scope,dashboards,dealers,medications,hospitals,$location){
    
    $scope.dashboards = dashboards; 
    $scope.dealers = dealers;
    $scope.hospitals = hospitals;
    $scope.medications = medications;
    console.log('Dashboard Controller');
    
    
    
   
    
    
   
    
});


app.controller('DashboardFormController',function($scope,dashboard,dealers,medications,hospitals,$location,$window){
    
    $scope.statusList =[{'_id':1,name:"Surplus"},{'_id':2,name:"Shortage"}];
    
    $scope.medicationList = [];
    
     angular.forEach(medications,function(value,key) {
         $scope.medicationList.push({'_id':value._id,'name':value.name});
     });
    
     $scope.hospitalList = [];
    
    angular.forEach(hospitals,function(value,key) {
        $scope.hospitalList.push({'_id':value._id,'name':value.name});
     });
    
     $scope.dealerList = [];
    
    angular.forEach(dealers ,function(value,key) {
        $scope.dealerList.push({'_id':value._id,'name':value.name});
    });
    
    
    var dashboardCopy = angular.copy(dashboard)
    var changeSuccess = function() {
      console.log('Change Success');  
      $location.path('/dashboard/list');
      $window.location.href = '/dashboard/list';
    };
    
    var changeError = function() {
      throw new Error('Something went wrong... Please try again.');
    };
    
    $scope.dashboard = dashboard;
    
    $scope.save = function(){
      $scope.dashboard.$saveOrUpdate(changeSuccess, changeSuccess, changeError, changeError).then(function() {
        $window.location.href = '/#/dashboard/list';
    });
    };
    
    $scope.remove = function() {
      $scope.dashboard.$remove(changeSuccess, changeError).then(function() {
        $window.location.href = '/#/dashboard/list';
    });
    };
    
    $scope.hasChanges = function(){
      return !angular.equals($scope.dashboard, dashboardCopy);
    };
    
    /**
     * Date Piker Functions
     * 
     * 
     */
    
    $scope.today = function() {
    $scope.createddate = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.createddate = null;
  };


  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);



  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.createddate = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    /**
     * Renew Date
     */
    
     /**
     * Date Piker Functions
     * 
     * 
     */
    
    $scope.todayrenew = function() {
    $scope.renewdate = new Date();
  };
  $scope.todayrenew();

  $scope.clearrenew = function() {
    $scope.renewdate = null;
  };


  $scope.toggleMinrenew = function() {
    $scope.minDaterenew = $scope.minDaterenew ? null : new Date();
  };

  $scope.toggleMinrenew();
  $scope.maxDaterenew = new Date(2020, 5, 22);



  $scope.open2renew = function() {
    $scope.popup2renew.opened = true;
  };

  $scope.setDaterenew = function(year, month, day) {
    $scope.renewdate = new Date(year, month, day);
  };

  $scope.dateOptionsrenew = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formatsrenew = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.formatrenew = $scope.formatsrenew[0];
  $scope.altInputFormatsrenew = ['M!/d!/yyyy'];

  $scope.popup1renew = {
    opened: false
  };

  $scope.popup2renew = {
    opened: false
  };

  var tomorrowrenew = new Date();
  tomorrowrenew.setDate(tomorrowrenew.getDate() + 1);
  var afterTomorrowrenew = new Date();
  afterTomorrowrenew.setDate(tomorrowrenew.getDate() + 1);
  $scope.eventsrenew =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];
    
    
       /**
    * Expire
     * Date Piker Functions
     * 
     * 
     */
    
    $scope.todayexpire = function() {
    $scope.expiredate = new Date();
  };
  $scope.todayexpire();

  $scope.clearexpire = function() {
    $scope.expiredate = null;
  };


  $scope.toggleMinexpire = function() {
    $scope.minDateexpire = $scope.minDateexpire ? null : new Date();
  };

  $scope.toggleMinexpire();
  $scope.maxDateexpire= new Date(2020, 5, 22);



  $scope.open2expire = function() {
    $scope.popup2expire.opened = true;
  };

  $scope.setDateexpire = function(year, month, day) {
    $scope.expiredate = new Date(year, month, day);
  };

  $scope.dateOptionsexpire = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formatsexpire = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.formatexpire = $scope.formatsexpire[0];
  $scope.altInputFormatsexpire = ['M!/d!/yyyy'];

  $scope.popup1expire = {
    opened: false
  };

  $scope.popup2expire = {
    opened: false
  };

  var tomorrowexpire = new Date();
  tomorrowexpire.setDate(tomorrowexpire.getDate() + 1);
  var afterTomorrowexpire = new Date();
  afterTomorrowexpire.setDate(tomorrowexpire.getDate() + 1);
  $scope.eventsrenew =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];


    
    
    
});



    
    



/**Dashboard Controller End */




/*Entity Controllers End
* */








