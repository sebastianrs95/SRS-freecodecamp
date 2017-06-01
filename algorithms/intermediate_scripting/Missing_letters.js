/** 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {

    // first get the codes into an array
    codeList = [];
    for( var i = 0 ; i < str.length ; ++i )
        codeList.push(str.charCodeAt(i));
    

    for( var i = 1 ; i < codeList.length ; ++i )
    {
        // check if the difference between codes is greater than 1
        if( Math.abs(codeList[i] - codeList[i-1]) > 1 )
            return String.fromCharCode(codeList[i-1] + 1);  // returns the number after the previous one
    }
    
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("bcd"));
console.log(fearNotLetter("yz"));