//*var myName = {
    firstName: "Jennifer",
    lastName: "Lingafelter",
    howdy: function () {
      return this.firstName + " " + this.lastName +" says Hello!";
}
}

myName.howdy();

var numba = prompt ("Enter your string");
if (numba.length<7) {
window.alert ("What a short little word");
}
else if (numba.length >7) {
  window.alert("I'm sorry, but that's too many to count.");
}
else {
  window.alert("That perfect!");
}


function inception (display, favMovie) {
 display (favMovie);
 favMovie = "Dead Pool"
}
 console.log (favMovie + "is a fantastic movie.");
