$(document).ready(function(flavor) {
  var flavors = ["Cookie Dough", "Cookies And Cream", "Strawberry", "Rainbow Sherbet."];
  //flavors.forEach(function(flavor) {
    //$("#icecream").append("<li>" + flavors + "</li>");
    for (var index = 0; index < flavors.length; index += 1) {
      $("#icecream").append("<li>" + flavors[index] + "</li>");

    }
//  event.preventDefault();
});
