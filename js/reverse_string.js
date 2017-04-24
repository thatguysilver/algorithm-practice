
function reverseString(str) {
  var a = str.split("").reverse().join("");
  /*mdn makes this shit wayyy too easy, so I'm gonna try and write
   *up exactly what I did so I can reference it in the future.
   *
   *The split() method takes a string and splits it into an array.
   *The part usually in the paranthases is a seperator, which means
   *that the method will search for that and create the lists, excuse
   *me, arrays, around that character. It's usually a space; in this
   *case, we use nothing so it'll create an array of each char.
   *
   *reverse() is an array operator. Pretty self-explanatory.
   *join does what it advertises; joins around the specified thing.
   *
   *in all these cases, I required strings (even blank ones) for
   *join() or split() to work.*/


  return a;


}

reverseString("hello");
