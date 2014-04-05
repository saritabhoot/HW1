$(document).ready(function(){
    var customer={
        id: 272356158,
        email:"customer@mailinator.com"
    };
    customer.id= 32;
    console.log(customer.id);  //property assignment works

    Object.defineProperty(customer, "id", {writable: false});

    customer.id= 64;     	//property assignment fails silently
    console.log(customer.id);	//and previous value is maintained

    console.log(Object.getOwnPropertyDescriptor(customer,'id'));
    Object.defineProperty(customer, 'id', {configurable: false});
});