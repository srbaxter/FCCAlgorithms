// return lowest index where val should be inserted once sorted

function getIndexToIns(arr, num) {
	arr.sort(function(a, b) {
    	return a - b;
  	});
  	for (var i = 0; i < arr.length; i++) {
    	if (arr[i] >= num) {
      		return parseInt(i);
    	}
  	}
  	return arr.length; //if val is the last value
}

getIndexToIns([40, 60], 50);
