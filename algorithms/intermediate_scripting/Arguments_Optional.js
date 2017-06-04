/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {

    
    for( var i = 0 ; i < arguments.length ; ++i )
        if( !Number.isFinite(arguments[i] ) ) return undefined;
    
    if( arguments.length == 2 )
    {
        return arguments[0] + arguments[1];
    }
    else
    {
        firstValue = arguments[0];
        function mySum(num) {
            if( !Number.isFinite(num) ) return undefined; 
            return firstValue + num 
        };
        return mySum;
    }
}

console.log( addTogether(2,3) );
console.log( addTogether(2)(3) );
console.log( addTogether("http://bit.ly/IqT6zt") );
console.log( addTogether(2, "3") );
console.log( addTogether(2)([3]) );