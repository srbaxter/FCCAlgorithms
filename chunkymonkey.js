// splits an array into groups the length of size and returns them as a 2D array.

function chunkArrayInGroups(arr, size) {
	var newArr = [];
	var i = 0;
	while (i < arr.length) {
    	newArr.push(arr.slice(i, i + size));
    	i += size;
	}
	return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
