//Gotta remove all "falsy" values, including 0.
function falsy(value) {
    return  (value !== false && value !== ''
             && value !== null && value !== undefined
             && value !== NaN && value !== 0
             && value.toString() !== "NaN"); //Necessary, since any boolean comparisons to NaN do weird, weird things to strings.
}
function bouncer(arr) {
  var filteredArr = arr.filter(falsy);

  return filteredArr;
}

bouncer([7, "ate", "", false, undefined, null, 0, NaN]);
