 
var prompt = require('prompt-sync')();

var n = prompt('enter any number ');
if(n > 0)
{
    console.log(`num ${n} is positive`)
}
else
{
    console.log(`num ${n} is negative`)
}