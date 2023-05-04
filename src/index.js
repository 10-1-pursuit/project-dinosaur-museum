// Creating a SCRATCH PAD FOR NOTES/IDEAS AND STEP GUIDE

//function getLongestDinosaur(dinosaurs) {}


// Returns an object with the longest dinosaur from the list. Converts from meters to feet.
//  *
//  * NOTE: To convert from meters to feet, multiply the meters by `3.281`.

/*
  A. create a variable to contain the current largest dino by feet. 
1. run a search through the list which is an array of objects to access the key dinosaurs[i].lengthInMeters
 for ( let oneDino of dinosaurs){ 
    oneDino.lengthInMeters
 }
 2. convert the oneDino.lengthInMeters into meters by * 3.281 
 
 4. return formatted dino object and length--where the key is the dino name and the value is the length{ Brachiosaurus: 98.43 } (sounds like .map)

*/
function getLongestDinosaur(dinosaurs) {
    let longestDino = null;
    let dinosConverted = dinosaurs.map(dino => ({[dino.name]: (dino.lengthInMeters )}))
    console.log(dinosConverted)


  let sizeSortedDinos = dinosaurs.sort((a, b) => (a.lengthInMeters * 3.281) - (b.lengthInMeters * 3.281))
  re
}