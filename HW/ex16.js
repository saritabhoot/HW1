    $(document).ready(function(){


    var date =new Date();
    var utcStart = new Date(1970,0.1);

    console.log(date);
    console.log(date.toJSON());

    console.log(date.valueOf());
    console.log(date - utcStart);
    });