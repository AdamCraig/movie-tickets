//business logic
function Ticket (movie, time, age, title, showing) {
  this.movieName = movie;
  this.movieTime = time;
  this.personAge = age;
  this.showTitle = title
  this.finalTime = showing;
}

Ticket.prototype.calculateTicketPrice = function() {
  var ticketPrice = this.movieName + this.movieTime + this.personAge;
  return ticketPrice;
}
//user interface logic
$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {

    event.preventDefault();

    var inputtedMovie = parseInt( $("select.new-movie").val() );
    var inputtedTime = parseInt( $("select.new-time").val() );
    var inputtedAge = parseInt( $("select.new-age").val() );
    var inputtedTitle = $(this).find("select.new-movie option:selected").text();
    var finalTime = $(this).find("select.new-time option:selected").text();

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge, inputtedTitle, finalTime);

    $("h1#ticket-price").text("$" + newTicket.calculateTicketPrice());

    $("#show-ticket").fadeIn().delay(10).fadeOut().delay(10).fadeIn().delay(10).fadeOut().delay(10).fadeIn().delay(10).fadeOut().delay(10).fadeIn();
    $("#show-ticket h3").text(newTicket.showTitle);
    $("#show-ticket h4").text(newTicket.finalTime);
  });
});
