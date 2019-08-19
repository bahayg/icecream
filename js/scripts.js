$(document).ready(function(event) {
  var flavors = ["Cookie Dough", "Cookies And Cream", "Strawberry", "Rainbow Sherbet."];
  flavors.forEach(function(flavor) {
    $("#icecream").append("<li>" + flavors + "</li>");

  event.preventDefault();
  });
});
