// return remaining elements of array after chopping off n elements from head

function slasher(arr, howMany) {
  	return arr.slice(howMany);
}

/*
or (worse)

function slasher(arr, howMany) {
  	arr.splice(0, howMany); 
  	return arr;
}
*/

slasher([1, 2, 3], 2);
