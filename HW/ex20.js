$(document).ready(function(){


    console.log(false === '');

    console.log(false == '');

    var falsy = [undefined, null, 0, -0, NaN, ''];

    for(var i =0; i < falsy.length; i++){
        console.log('if' + falsy[i]);
        if(falsy[i]){
            console.log(' >> Evaluates to true');
        } else {
            console.log(' >> Evaluates to False');
        }
    }


});

