
$(document).ready(function(){
    var parent={
        x:32,
        y:32
    };
    var child= Object.create(parent);
    console.log(child instanceof Object);

    var child2= Object.create(null);
    console.log(child2 instanceof Object);

    console.log(child2.tostring());
});
