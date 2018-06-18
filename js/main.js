/*var myName = {
    firstName: "Jennifer",
    lastName: "Lingafelter",
    howdy: function () {
      return this.firstName + " " + this.lastName +" says Hello!";
}
}

myName.howdy();
*/

//Trying again to create function howdy
function howdy () {
  var firstName = "Jennifer";
  var lastName = "Lingafelter";
  var fullName = firstName + " " + lastName;
  return (fullName + " " + "says Hi");
}
console.log (howdy ());

//numba function with 7

var numba = function(string) {
  if (string.length < 7) {
  return ("What a short little word");
}
  else if (string.length > 7) {
  return ("I'm sorry, but that's too many to count.")
}
  else {
  return ("That perfect!");
}
};
numba("7");

//numba function with seventy

var numba = function(string) {
  if (string.length < 7) {
  return ("What a short little word");
}
  else if (string.length > 7) {
  return ("I'm sorry, but that's too many to count.")
}
  else {
  return ("That perfect!");
}
};
numba("seventy");

//numba function with university

var numba = function(string) {
  if (string.length < 7) {
  return ("What a short little word");
}
  else if (string.length > 7) {
  return ("I'm sorry, but that's too many to count.")
}
  else {
  return ("That perfect!");
}
};
numba("university");

function inception (display, favMovie) {
  display(favMovie);
}
function movieName(movie) {
  console.log (movie + " is a fantastic movie.")
}
inception (movieName, "Dead Pool");
