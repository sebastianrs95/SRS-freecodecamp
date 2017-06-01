/**
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/


function pairElement(str) {

    //for( var i = 0 ; i < str.length ; ++i ) arr.push(str[i]);
    pairs = [];
    holder = [];
    for( var i = 0 ; i < str.length ; ++i )
    {
        if( str[i] == 'A')
        {
            holder.push('A');
            holder.push('T');
        }

        if( str[i] == 'T')
        {
            holder.push('T');
            holder.push('A');
        }

        if( str[i] == 'G')
        {
            holder.push('G');
            holder.push('C');
        }

        if( str[i] == 'C')
        {
            holder.push('C');
            holder.push('G');
        }
        pairs.push(holder);
        holder = [];
    } 

    
    return pairs;
}

console.log(pairElement("GCG"));