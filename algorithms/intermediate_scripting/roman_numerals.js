
function convertToRoman(num) {

	var numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var roman = '';
	var i, j, quot;
	for( i = 0 ; i < numerals.length ; ++i ){

        quot = Math.floor(num/numerals[i]);
		if( quot !== 0 ){
          
			for( j = 0 ; j < quot ; ++j ){
				roman += romans[i];
			}
          
            num -= quot * numerals[i];
		}		
	}
	return roman;
}

console.log(convertToRoman(4));
