var myName = {
    firstName: "Jennifer",
    lastName: "Lingafelter",
    howdy: function () {
      return this.firstName + " " + this.lastName +" says Hello!";
}
}
myName.howdy();
