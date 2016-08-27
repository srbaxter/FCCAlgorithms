// remove elements from array with same value as 1+ arguments

function destroyer(arr) {
	// turn arguments into an array
	var args = Array.from(arguments).slice(1);
  	return arr.filter(function(val) {
    	return !args.includes(val);
  	});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);