
    $(document).ready(function(){
        function customer(){
            //empty constructor function
        }
        var customerA =new customer();
        console.log("typeof customerA:" + typeof customerA);
        console.log("Is customerA a customer?: " +(customerA instanceof customer));
    });

