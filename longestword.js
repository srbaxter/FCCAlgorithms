// finds longest word in a string and returns its length

function findLongest(str) {
	var length = 0;
	var strarray = str.split(" ");
	for (var i = 0; i < strarray.length; i++) {
		if (strarray[i].length > length) {
			length = strarray[i].length;
		}
	}
	return length;
}


/*
using sort 

function findLongest(str) {
	var longest = str.split(" ").sort(function(a, b) {
		return b.length - a.length;
	});
	return longest[0].length;
}
*/
*
findLongestWord("The quick brown fox jumped over the lazy dog");
