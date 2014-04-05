$(document).ready(function(){


    var x = {};
    var y = {id:1};
    var z = x.id || y.id;
    console.log(z); // explain that x.id is undefined, hence, the value assigned to z is y.id

    x.id=100;
    var z = x.id || y.id;
    console.log(z); // returns the first expression evaluating to true

    var z = x.id && y.id;
    console.log(z);  // returns the last expression if every expression evaluates to true

});

