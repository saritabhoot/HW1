$(document).ready(function(){


    function parentFunction(){
        var privateVariable = 1;
        function increamentPrivateVariable(){
            return privateVariable++;
        }
        return increamentPrivateVariable();
    }

    var result = parentFunction();
    console.log(result);

    function parentFunctionx(){
        var privateVariable = 1;
        function increamentPrivateVariable(){
            return privateVariable++;
        }
        return increamentPrivateVariable();
    }


    result = parentFunctionx();
    //console.log(result());
   // console.log(result());

    console.log(result);
    console.log(parentFunctionx());


});

