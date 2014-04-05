$(document).ready(function(){

    var varTest = 32;
    (function(){
        console.log('Immediate functions are great!');
    }());

    var _=(function(){
        var localScope =32;
        varTest = varTest * localScope;
        this.square = function(x){return x * x};
        return this;
    }());

    //console.log(localScopeVariable);

    console.log(varTest);
    var squared = _.square(10);

    console.log(squared);
    console.log(_.localScope);


});

