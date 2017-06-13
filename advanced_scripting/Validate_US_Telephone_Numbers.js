/*
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
*/


function telephoneCheck(str) {
    // Good luck!
    //var re = /1? ?\(?\d\d\d\)? ?-?\d\d\d-? ?\d\d\d\d/g;
    var re = /(\d)? ?((\(\d\d\d\))|(\d\d\d)) ?-?\d\d\d-? ?\d\d\d\d/g;
    var match = re.exec(str);
    if( match !== null)
    {
        console.log(match);
        console.log(match[1]);
        if( match[1] !== undefined && match[1] != 1 ) return false;
        return true;
    } 
    else return false;
}

console.log( telephoneCheck("(555)555-5555") );
