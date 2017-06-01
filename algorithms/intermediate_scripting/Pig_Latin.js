/**

Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

 */

function translatePigLatin(str) {
    var re = new RegExp('[bcdfghjklmnpqrstvwxyz]+', 'i');       // get the first consonant or consonants
    firstLetter = str.match(re);        // get the first match
    var startsWithConsonant = false;

    if( firstLetter[0][0] == str[0] ) startsWithConsonant = true;
    
    if( startsWithConsonant )
    {
        // we use the number of consonants that matched as the param for slice
        str = str.slice(firstLetter[0].length) + firstLetter + 'ay';    
    }
    else    // if it starts with a vowel
    {
        str = str + 'way';
    }
    
    return str;
}

var result = translatePigLatin("glove");
console.log(result);