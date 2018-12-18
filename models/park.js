const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function() {
  this.dinosaurCollection.shift()
}


module.exports = Park;
