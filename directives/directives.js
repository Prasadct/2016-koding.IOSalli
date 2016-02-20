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


app.directive('leave',function(){
    
   
    return function(scope, element){
        
        element.bind("mouseleave", function(){
            
            /*console.log("Mouse Leaving here...")*/
            element.removeClass("myPanel");
            
        })
        
    }
    
});


app.directive('enter1',function(){
    
   
    return function(scope, element, attrs){
        
        element.bind("mouseenter", function(){
            
           /* console.log("Mouse Entered here...")*/
            element.addClass(attrs.enter1);
            
        })
        
    }
    
});


app.directive('leave1',function(){
    
   
    return function(scope, element, attrs){
        
        element.bind("mouseleave", function(){
            
            /*console.log("Mouse Leaving here...")*/
            element.removeClass(attrs.leave1);
            
        })
        
    }
    
});

/*These Directive Patterns are good for UI handling and Changing CSS dynamically END*/
 




/*Directives Calling Controller Functions START*/


app.directive('func1', function(){
    
    return function(scope, element, attrs){
        
        element.bind("mouseenter",function(){
            
            scope.$apply(attrs.func1)
            
        })
        
    }
    
})


/*Directives Calling Controller Functions END*/


/***************************************************************************/


/*Directive Directive Communication START*/




/*Directive Directive Communication END*/

app.directive('superhero', function(){
    
    return {
        
      
        restrict:'E',
        scope:{},//scope will not be shared with other elements' scope
        
        controller: 'DirectiveController',
        
        link: function(scope,element){
            element.addClass("form-control myPanel");
            element.bind("mouseenter",function(){
                
                console.log(scope.abilities);
                
            })
             
        }
        
        
    };
    
})


app.directive('strength', function(){
    
    return{
        
      require:"superhero",
        
        link: function(scope, element, attrs, superheroCtrl){
            
            superheroCtrl.addStrength();
        }
        
    };
    
    
})



app.directive('speed', function(){
    
    return{
        
      require:"superhero",
        
        link: function(scope, element, attrs, superheroCtrl){
            
            superheroCtrl.addSpeed();
        }
        
    };
    
    
})



app.directive('flight', function(){
    
    return{
        
      require:"superhero",
        
        link: function(scope, element, attrs, superheroCtrl){
            
            superheroCtrl.addFlight();
        }
        
    };
    
    
})

/*Clean Up Scope Directive START*/


app.directive('alertme',function(){
    
    return{
        
        restrict:'E',
        scope:{
            done:'&'
        },
        controller:'CleanScopeController',
        templateUrl:'templates/cleanscope/cleanscope.html'
        
        
    };
    
})



/*Clean Up Scope Directive END*/



/**
 * $Parse Controlling Directive Start 
 */

app.directive('myClick', function ($parse) {
        return {
            restrict:'A',
            controller:'ParseController',
            link: function (scope, element, attrs) {
              //  var onClick = $parse(attrs.myClick);
                element.on('click', function (e){
                    // The event originated outside of angular,
                    // We need to call $apply
                    console.log('Parse Click...');
                   
                });
            }
        }
    })


/**$Parse Controlling Directive End */


/*Angular Watch Start* */


app.directive('dumbpassword',function(){
    
    return{
        
        restrict:'E',
        replace:false,
        templateUrl:"templates/dumbpassword/dumbpassword.html",
        link: function(scope,element){
            
            scope.$watch("model.input", function(value){
                
                  if(value == "password" && String(value).length==8 ){
                     
                      element.children(0).toggleClass("alert-fine")
                  }else if(String(value).length>=8 || value !=="password"){
                       element.children(0).toggleClass("alert-warn")
                  }
                
            })
            
        }
        
    };
    
});


/*Angular Watch End* */