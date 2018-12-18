const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.dinosaurAdd = function(dinosaur) {
  this.dinosaurCollection.push(dinosaur)
}


module.exports = Park;
