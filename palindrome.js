// if given string is a palindrome. removes all non-alphanumeric characters and turns everything lowercase

function palindrome(str) {
	if (str === "" || str.length === 1) {
	return true;
	}
	var clearstr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); //get rid of anything that's not a-z or 0-9
	var reversestr = clearstr.split("").reverse().join("");

	return reversestr === clearstr;
}


/*
using for loop

function palindrome(str) {
	str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	var len = str.length;
	for (var i = 0; i < len/2; i++) {
		if (str[i] !== str[len-1-i]) {
			return false;
		}
	}
	return true;
}
*/

palindrome("eye");
