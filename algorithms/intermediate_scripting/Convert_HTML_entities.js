/*

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
  
    charArr = [ '&', '<', '>', '"', '\''];
    htmlEnt = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
    
    var re = new RegExp();

    for( var i = 0 ; i < charArr.length ; ++i )
    {
        re = RegExp(charArr[i], 'g');
        str = str.replace(re, htmlEnt[i]);
    } 

    return str;
}


console.log( convertHTML("Hamburgers < Pizza < Tacos") );
