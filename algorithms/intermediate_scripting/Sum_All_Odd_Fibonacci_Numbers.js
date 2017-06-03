/*

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

*/

function sumFibs(num) {

    var previous = 1;   // seed values
    var next = 1;
    var aux;
    var total = previous;   // initialize with previous value

    while( next <= num )
    {
        if( !(next % 2 == 0) )  total += next;     // add the next value to the total if next is an odd number
        
        aux = next;        // store next's value in an auxiliar variable
        next += previous;  // get the next number of the Fibonacci sequence
        previous = aux;   // move previous to the next position
    }

    return total;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));