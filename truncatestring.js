// truncate a string if longer than the given maximum string length. return the truncated string with a ... ending.
// note that inserting the three dots to the end will add to the string length.
// if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
	if (str.length > num && num <= 3) {
    	return str.slice(0, num) + "...";
  	} else if (str.length > num && num > 3) {
    	return str.slice(0, num-3) + "...";
  	} else {
   		return str;
  	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
