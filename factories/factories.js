var app = angular.module('myFactories',['mongolabResourceHttp'])




app.factory('messages',function(){
    
  var messages = {};

  messages.list = [];

  messages.add = function(message){
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});

app.factory('Hospital', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('hospitals');
})

app.factory('Medication', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('medications');
})

app.factory('Dealer', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('dealers');
})

app.factory('Dashboard', function ($mongolabResourceHttp) {
    return $mongolabResourceHttp('dashboards');
})