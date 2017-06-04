/*

Drop the elements of an array (first argument), starting from the front, 
until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array 
to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

*/


function dropElements(arr, func) {
  
    var arr2 = [];  
    var stillFalse = true;

    for( var i = 0 ; i < arr.length ; ++i )
    {
        if( !stillFalse )
        {
            arr2.push(arr[i]);
        }
        else
        {
            if( func(arr[i]) )
            {
                arr2.push(arr[i]);
                stillFalse = false;
            } 
        }
    }

    return arr2;
}

console.log( dropElements([0, 1, 0, 1], function(n) {return n === 1;} ) );