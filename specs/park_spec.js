const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('raptor', 'carnivore', 70);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 45);
    dinosaur4 = new Dinosaur('stegosaurus', 'herbivore', 37);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Lost World', 28, dinosaurs);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Lost World');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 28);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 3)
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 4)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.removeDinosaur();
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostPopular();
    assert.strictEqual(actual, 'raptor')
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate the total revenue from ticket sales for one year');

  it('should be able to remove all dinosaurs of a particular species');

});
