module.exports = function check(str, bracketsConfig) {
  var arr = str.split("");
  var arr1 = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] === bracketsConfig[j][1]
        && arr1[arr1.length - 1] === bracketsConfig[j][0]) {
            arr1.pop();
            break;
      } else if (arr[i] === bracketsConfig[j][0]) {
            arr1.push(arr[i]);
            break;
      } else if (arr[i] === bracketsConfig[j][1]
            && (arr1.length === 0 || arr1[arr1.length - 1] !== bracketsConfig[j][0])) {
                return false;
      }
    }
  }

  if (arr1.length == 0) {
        return true;
  }
  else {
        return false;
  }     
}
