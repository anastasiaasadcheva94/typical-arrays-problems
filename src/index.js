
exports.min = function min (array) {
  if(typeof array == 'undefined' || array.length == 0){
    return 0;
  } else {
    var minNum = array[0];
    for (var i = 0; i < array.length; i++) {
      if (minNum > array[i]) minNum = array[i]; 
  }
    return minNum;
  }
}

exports.max = function max (array) {
  if(typeof array == 'undefined' || array.length == 0){
    return 0;
  } else {
  var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i]; 
    }
    return max;
  }
}

exports.avg = function avg (array) {
  if(typeof array == 'undefined' || array.length == 0){
    return 0;
  } else {
    var avg = 0;
    for (var i = 0; i < array.length; i++) {
      avg += array[i];
  }
  return avg/array.length;
  }
}
