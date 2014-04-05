console.log('starting compute intensive task......');
var x = 500;
while(x > 0){
    var t = x * x * x;
    x--;
    console.log('cube of ' + x + ' is ' + t);

}
console.log('compute intensive task ended....');