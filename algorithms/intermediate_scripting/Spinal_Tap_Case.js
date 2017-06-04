/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var re = new RegExp('[A-Z]', 'g');

    var match = re.exec(str.substr(1));
    while( ( match !== null ) )
    {
        str = str.substr(0, match.index+1) + '-' + match[0].toLowerCase() + str.substr(match.index + 2);     // match[0] being the UpperCase char found
        match = re.exec(str.substr(1));
    }

    re = RegExp(/\W?_\W?/, 'g');
    str = str.replace(re, '-');

    re = RegExp(/\W? \W?/, 'g');
    str = str.replace(re, '-');
    

    str = str.toLowerCase();
    return str;
}


var msg = 'Teletubbies say Eh-oh';
console.log( spinalCase(msg) );
//This Is Spinal Tap
//thisIsSpinalTap
//AllThe-small Things
//Teletubbies say Eh-oh
//The_Andy_Griffith_Show