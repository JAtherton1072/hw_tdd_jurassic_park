const Park = function (name, ticketPrice, collectionDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionDinosaurs = collectionDinosaurs;
}


Park.prototype.addDinosaurCollection = function () {

   this.collectionDinosaurs.push('newDino');
};



Park.prototype.removeDinosaurCollection = function () {

   this.collectionDinosaurs.shift();
};







module.exports = Park;
