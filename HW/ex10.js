$(document).ready(function() {
    var customer = {
        id: 32,
        email: "customer@mailinator.com"
    };

    var customerA = Object.create(customer);
    customerA.gender ="male";
    customerA.phone = "323456789";
    Object.defineProperty(customerA, 'phone' , {enumerable: false});

    console.log(customerA);
    console.log(customer);

    console.log('id' in customerA);
    console.log('gender' in customerA);

    console.log(customerA.hasOwnProperty('id'));
    console.log(customerA.hasOwnProperty('gender'));

    console.log(customerA.propertyIsEnumerable('id'));
    console.log(customerA.propertyIsEnumerable('gender'));
    console.log(customerA.propertyIsEnumerable('phone'));

    console.log('\nPrinting customerA properties as name:value pairs: \n');
    for (var prop in customerA) {
        console.log(prop + ':' + customerA[prop]);

    }
    var arr = Object.keys(customerA);
    console.log(arr);


});
