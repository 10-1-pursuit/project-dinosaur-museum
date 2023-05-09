/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  if (dinosaurs.length === 0){
  return {}; //returns empty obj
}
let longestDino = dinosaurs[0]; //first element
for (let i = 1; i < dinosaurs.length; i++){ //looping through all dinos to determinate the longest one
  if (dinosaurs[i].lengthInMeters > longestDino.lengthInMeters) { 
    longestDino = dinosaurs[i]; //checking and iterating the length of object
  }
}
const lengthInFeet = longestDino.lengthInMeters * 3.28084 //calculates in feets
return {[longestDino.name]: lengthInFeet}; //returning an obj of the longest dino
}
/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  
  let dinosaur = dinosaurs.find(dino => dino.dinosaurId === id); //using .find method to search for dino obj in dinosaurs.js array w/'dinosaurId'='id'
  if (dinosaur === undefined) {
    return "A dinosaur with an ID of '" + id + "' cannot be found."; //returns an error msg since dino was undefined
  }
  return `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${dinosaur.mya[dinosaur.mya.length - 1]} million years ago.`;
  } //returns searched dinos 
   
  
/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
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
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  const i = 0; //const variable 
const ids = []; //empty array
dinosaurs.forEach(dino=> { //initiates loop for each dino obj in "dinosaurs".js array
  if (Array.isArray(dino.mya) && dino.mya.length === 1) { //checks if mya of obj 'dino' is an array and has length of 1
    const dinoMya = dino.mya[0]; //assigns the only value of property 'mya' and obj 'dino' 
    if (dinoMya >= mya - i && dinoMya <= mya) { //checks if the value of 'dinoMya' if greater or= to 'mya -i' as well as less than or = to 'mya'
     ids.push(dino.dinosaurId) //if true pushes obj 'dino' to the 'ids' array
    }
  } else {
    dino.mya.forEach (dinoMya => {
      if (dinoMya >= mya - i && dinoMya <= mya) {
       return ids.push(dino.dinosaurId) //looping througt each array with method '.ForEach' and checks if 'dinosaur.mya'falls with specific range. if all good it will be pushed to array 'ids' 
    }
  });
}
});
if (key) { //checks if 'key' exists 
  return ids.map(dinosaurId => { //using .map method to transform 'dinosaurId' to array of 'ids'
    const dino = dinosaurs.find(dino1 => dino1.dinosaurId === dinosaurId); //using method .find to search for matching 'dinosaurId' in 'ids' array
    if (dino[key]) { //checks if 'dino' obj has a prop. that matches 'key'
      return dino[key]; //returns value assosiated w/ 'key'
    } else {
      return dinosaurId; //returns dinosaurId if paramenters dot match w/'key'
  }
});
} else {
  return ids; // returns an array of all dino's ID
}
}


module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
