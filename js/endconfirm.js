//Had to confirm the end without using the .endswith() method.
function confirmEnding(str, target) {
  return (target === str.substr(-target.length));

}

confirmEnding("Bastian", "n");

//Not to sound snooty, but I'm not sure why this was assigned at all
//as an algorithm challenge.
