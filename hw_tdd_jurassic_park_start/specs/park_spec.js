const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;


  beforeEach(function () {
    park = new Park('jurassic', 20, ['T-rex', 'Stegosaurus', 'Diplodocus']);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'jurassic');
  });


   it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });




   it('should have a collection of dinosaurs', function () {
     const actual = park.collectionDinosaurs;
     assert.deepStrictEqual(actual, ['T-rex', 'Stegosaurus', 'Diplodocus']);
   });


   it('should be able to add a dinosaur to its collection', function () {
     park.addDinosaurCollection();
     const actual = park.collectionDinosaurs;
     assert.deepEqual(actual, ['T-rex', 'Stegosaurus', 'Diplodocus', 'newDino']);
   });



   it('should be able to remove a dinosaur from its collection', function () {
     park.removeDinosaurCollection();
     const actual = park.collectionDinosaurs;
     assert.deepStrictEqual(actual, ['Stegosaurus', 'Diplodocus']);
   });







  //
  // it('should be able to find the dinosaur that attracts the most visitors');
  //
  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to calculate the total number of visitors per day');
  //
  // it('should be able to calculate the total number of visitors per year');
  //
  // it('should be able to calculate total revenue for one year');

});
