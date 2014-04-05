$(document).ready(function(){


    var arr =[];

    arr[0] = 1+ Number("2");

    arr[1] = 1+ Number("hello");
//arr[2] = 1 + "hello";
    arr[3] =Number([3]) + 4;
    arr[4] = +"3";
    arr[5] = !!("hello");
    arr[6] = Boolean('Hello World');

    console.log(arr.join('\n'));

    console.log(parseInt('22 Customers have 32 orders'));
    console.log(parseInt(' .32'));
    console.log(parseFloat(' .32'));

});
