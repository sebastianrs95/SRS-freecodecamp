/*

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

*/

function truthCheck(collection, pre) {
    
    for( var i = 0 ; i < collection.length ; ++i )
    {
        if( !collection[i][pre] ) return false;
    }
    return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
            {"user": "Dipsy", "sex": "male"}, 
            {"user": "Laa-Laa", "sex": "female"},
            {"user": "Po", "sex": "female"}], 
            "sex"));

