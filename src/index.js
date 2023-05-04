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


function getLongestDinosaur(dinosaurs) {
    let longestDino = null;
    let dinosConverted = dinosaurs.map(dino => ({[dino.name]: (dino.lengthInMeters )}))
    console.log(dinosConverted)


  let sizeSortedDinos = dinosaurs.sort((a, b) => (a.lengthInMeters * 3.281) - (b.lengthInMeters * 3.281))
  re
}

1. search through the list (dinosaurs.dinosaurId) to find dinosaur.
2. If found : return formatted statment as `${dinosaur.name} ${dinosaur.pronunciation}\n${dinosaur.info}` 

3. or else : return statment `A dinosaur with an ID of ${id} cannot be found.`

function getDinosaurDescription(dinosaurs, id) {
  for (let dino of dinosaurs){
    if(dino.dinosaurId == id){
      return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${dino.mya[1]} million years ago.`
    }
 }; return "A dinosaur with an ID of '"+ id +"' cannot be found."
  };


*/

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *1. create an arry to put my dino.dinosaurId in.
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *2. if mya requested is > mya listed include in the list 
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 
function getDinosaursAliveMya(dinosaurs, mya, key) {}
*/




