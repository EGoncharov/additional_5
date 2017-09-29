module.exports = function check(str, bracketsConfig) {
  
  var arrayOne = str.split('');
  var arrayTwo = [];
  
  for (var i=0; i<arrayOne.length; i++) {
    for (var x=0; x<bracketsConfig.length; x++) {
      if (arrayOne[i] === bracketsConfig[x][0]) {
        arrayTwo.push(arrayOne[i]);
      }
      if (arrayOne[i] === bracketsConfig[x][i] && arrayTwo[arrayTwo.length-1] === bracketsConfig[x][0]) {
        arrayTwo.pop()
      }
    }
  }
  if (arrayTwo.length == 0) {
    return true;
  } else {
    return false;
  }
      
}
