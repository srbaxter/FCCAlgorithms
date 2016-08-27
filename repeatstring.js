// repeat a string

function repeatStringNumTimes(str, num) {
	if (num < 1) {
		return "";
	}
	return str.repeat(num);
}

/*
or

function repeatStringNumTimes(str, num) {
	if (num < 1) {
    	return "";
  	}
  	return new Array(num + 1).join(str);
}
*/
repeatStringNumTimes("abc", 3);
