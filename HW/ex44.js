$(document).ready(function(){

    var callBack = function(id, email){
        console.log('Email of id:' + id + ' is ' + email);

    };
    var customer ={
        id:32,
        email:'customer@golivelabs.io',
        eventHandler: function(fn){
            fn(this.id, this.email);
        }
    };

    function causeEvent(_cust){
        _cust.eventHandler(callBack);

    }
    causeEvent(customer);


});

