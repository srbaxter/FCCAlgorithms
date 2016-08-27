// return true if str in 1st element of array contains all letters of str in 2nd element

function mutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) {
      return false;
    }
  }
  return true;
}

/*
or

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
  });
}
*/

mutation(["hello", "hey"]);
