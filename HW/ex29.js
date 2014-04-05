$(document).ready(function(){


    var x = "Hello";

    function changeX(x) {
        return x.slice(3,5);
    }

    function changeY(x) {
        x =  x.slice(3,5);
    }

    console.log(changeX(x));
    changeX(x);
    console.log(x);

});

