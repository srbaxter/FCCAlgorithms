// reverse a provided string

function reverseString(str) {
	return str.split("").reverse().join("");
}

/* 
without built-in functions

function reverseString(str) {
	var newstr = "";
	for (var i = str.length - 1; i >= 0; i++) {
		newstr += str[i];
	}
	return newstr;
}
*/

reverseString("hello");
