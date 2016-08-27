// return the largest numbers in sub-arrays of an array

function largestOfFour(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var largest = -Infinity;    
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }    
    result.push(largest);    
  }  
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
