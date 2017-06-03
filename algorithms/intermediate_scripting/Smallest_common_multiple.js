/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {

    
    var greatest;
    if( arr[0] > arr[1] ){
        greatest = arr[0];
        lesser = arr[1];
    } 
        
    else{
        greatest = arr[1];
        lesser = arr[0];
    } 

    var arrNum = [];
    for( var i = lesser ; i <= greatest ; ++i )
        arrNum.push(i);


    console.log(arrNum);
    var isFound = false;

    var multiplier = 2;     // this multiplier will increment by one every loop
    var smallestCommon = greatest;  // store the value of the greatest
    while( !isFound )
    {
        isFound = true;
        for( var i = 0 ; i < arrNum.length - 1 ; ++i )  // check every element of the array until one before the greatest
        {
            if( smallestCommon % arrNum[i] != 0 ){    
                isFound = false;
                break;
            }
        }

        if( isFound ) return smallestCommon;
        smallestCommon = greatest * multiplier;       // continue looping with the next multiple of the greatest
        ++multiplier;
        console.log("greatest is now ", greatest, "multiplier is", multiplier);
    }
}

console.log( smallestCommons([1,4]));
console.log( smallestCommons([5,1]));