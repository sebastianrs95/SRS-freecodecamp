/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function isPrime(num) {

    if( num <= 1 ) return false;
    else if ( num <= 3 ) return true;
    
    else if ( num % 2 == 0 || num % 3 == 0) return false;
    
    var i = 5;
    while( i * i <= num )
    {
        if( num % i == 0 || num % (i+2) == 0 ) return false;
        i += 6;
    }
    return true;
}

function sumPrimes(num) {

    var total = 0;
    for( var i = 2 ; i <= num ; ++i )
        if( isPrime(i) ) total += i;

    return total;
}

console.log(sumPrimes(977));
console.log( isPrime(2), isPrime(3), isPrime(5), isPrime(6), isPrime(7) ); 