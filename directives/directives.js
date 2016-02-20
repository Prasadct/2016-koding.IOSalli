var app =angular.module('myDirectives',[])



app.directive('signup',function(){
    
    
    return{
                
        restrict :'E',
        templateUrl:'templates/signup/signup.html',
        controller:'SignUpController'
        
        
    };
    
    
})

app.directive('signin',function(){
    
    
    return{
                
        restrict :'E',
        templateUrl:'templates/signin/signin.html',
        controller:'SignInController'
        
        
    };
    
    
});

/*These Directive Patterns are good for UI handling and Changing CSS dynamically START*/

app.directive('enter',function(){
    
   
    return function(scope, element){
        
        element.bind("mouseenter", function(){
            
           /* console.log("Mouse Entered here...")*/
            element.addClass("myPanel");
            
        })
        
    }
    
});



/*Angular Watch End* */