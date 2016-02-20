var app = angular.module('myValidations',['ngMessages'])

app.directive('strongSecret',function(){
    
    return{
        
      
        restrict : 'A',
        
        require : 'ngModel',
        
        link: function(scope,element,attr,ctrl){
            
            
            
            function customValidator(ngModelValue) {
        
        // check if contains uppercase
        // if it does contain uppercase, set our custom `uppercaseValidator` to valid/true
        // otherwise set it to non-valid/false
        if (/[A-Z]/.test(ngModelValue)) {
            ctrl.$setValidity('uppercaseValidator', true);
        } else {
            ctrl.$setValidity('uppercaseValidator', false);
        }

        // check if contains number
        // if it does contain number, set our custom `numberValidator`  to valid/true
        // otherwise set it to non-valid/false
        if (/[0-9]/.test(ngModelValue)) {
            ctrl.$setValidity('numberValidator', true);
        } else {
            ctrl.$setValidity('numberValidator', false);
        }

        // check if the length of our input is exactly 6 characters
        // if it is 6, set our custom `sixCharactersValidator` to valid/true
        // othwise set it to non-valid/false
        if (ngModelValue.length === 6) {
            ctrl.$setValidity('sixCharactersValidator', true);
        } else {
            ctrl.$setValidity('sixCharactersValidator', false);
        }

        // we need to return our ngModelValue, to be displayed to the user(value of the input)
        return ngModelValue;
    }

    // we need to add our customValidator function to an array of other(build-in or custom) functions
    // I have not notice any performance issues, but it would be worth investigating how much
    // effect does this have on the performance of the app
    ctrl.$parsers.push(customValidator);
            
            
        }
        
    };
    
    
});


app.directive('match', function($parse) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ctrl) {
      scope.$watch(function() {        
        return $parse(attrs.match)(scope) === ctrl.$modelValue;
      }, function(currentValue) {
        ctrl.$setValidity('mismatch', currentValue);
      });
    }
  };
});


