/*
    Flatten a nested array. You must account for varying levels of nesting.
*/

function flatten(arr){

    var holder = [];

    
    for( var i = 0 ; i < arr.length ; ++i )
    {
        //console.log(Array.isArray( arr[i] ), arr[i]);
        if( Array.isArray( arr[i] ) ){
            holder = holder.concat( flatten(arr[i]) );
        }
        else holder.push( arr[i] ); 
    }

    return holder;
}

console.log( flatten([1, [2], [3, [[4]]]]) );
console.log( flatten( [[["a"]], [["b"]]] ) );
console.log( flatten([1, [], [3, [[4]]]]) );
console.log( flatten( [1, {}, [3, [[4]]]] ) );

