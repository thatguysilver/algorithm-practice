// seek and destroy from fcc.

function destroyer(arr) {
  var toBeDel = [];
  var  argsArray = Array.prototype.slice.call(arguments);
  function basicFilter(item) {
    var bool = toBeDel.includes(item);
    return !bool;
  }
  for (i = 1 ; i < arguments.length; i++) {
    toBeDel.push(arguments[i]);
  }
  //return argsArray[0]
  return argsArray[0].filter(basicFilter);
