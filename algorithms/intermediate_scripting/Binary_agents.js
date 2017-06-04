/*

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

*/

function convertFromBinary( str ){

    arr = str.split(" ");

    var exponent = 0;
    var num = 0;
    var numArray = [];
    for( var i = 0 ; i < arr.length ; ++i )
    {
        for( var j = arr[i].length - 1 ; j >= 0 ; --j )
        {
            if( arr[i][j] == "1" ) num += Math.pow(2, exponent);
            ++exponent;
        }
        exponent = 0;
        numArray.push( num );
        num = 0;
    }

    return numArray;
}

function binaryAgent(str) {
    numArray = convertFromBinary(str);
    message = "";

    for( var i = 0 ; i < numArray.length ; ++i )
    {
        message += String.fromCharCode(numArray[i]);
    }
    return message;
}

console.log( binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") );