// take a ROT13 string and return with uppercase letters and values shifted by 13 places ('A' -> 'N')

function rot13(str) { 
  return str.split('').map.call(str, function(char) {
    // Convert char to a character code
    x = char.charCodeAt(0);
    // Checks if character lies between A-Z
    if (x < 65 || x > 90) {
      return String.fromCharCode(x);  // Return un-converted character
    }
    // N = ASCII 78, if the character code is less than 78, shift forward 13 places
    else if (x < 78) {
      return String.fromCharCode(x + 13);
    }
    // Otherwise shift the character 13 places backward
    return String.fromCharCode(x - 13);
  }).join('');  // Rejoin the array into a string
}

rot13("SERR PBQR PNZC");
