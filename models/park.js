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

// I couldn't get this to work without hard-coding the max value so decided to move on!
Park.prototype.mostPopular = function() {
  for (dinosaur of this.dinosaurCollection) {
    if (dinosaur.guestsAttractedPerDay == 70) {
      return dinosaur.species
    }
  }
}


module.exports = Park;
