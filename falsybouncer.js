// remove all falsy values from array

function bouncer(arr) {
	return arr.filter(Boolean);
}

/*
or

function bouncer(arr) {
	return arr.filter(function(element) {
		return !!element;
  	});
}
*/

bouncer([7, "ate", "", false, 9]);
