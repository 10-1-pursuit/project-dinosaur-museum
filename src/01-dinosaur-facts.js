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
  let bigDinosaur = null; //null is a placeholder.

  for(const dinosaur of dinosaurs) { // iterates over the array dinosaurs.
    if (!bigDinosaur || dinosaur.lengthInMeters > bigDinosaur.lengthInMeters) { // if !bigDinosaur(*is null*) OR dinosaurs that are being iterated are bigger than bigDinosaur
      bigDinosaur = dinosaur; // if either of these happen then bigDinosaur is updated to that dinosaur that is being iterated.
      } 
    }

  if (bigDinosaur === null){ // the strictly equals make sure if bigDinosaur only equals null then return an empty object, as said in test
    return {};
  }

  const bigDinosaurInFeet = {
    [bigDinosaur.name]: bigDinosaur.lengthInMeters * 3.281 // bigDinosaur.name(new object that is DYNAMIC and has a SINGPLE KEY-VALUE PAIR)the KEY is set to the name of the biggest dinosaur
  }; // which was obtained by bigDinosaur and the biggest dinosaur is multiplied to match feet.

  return bigDinosaurInFeet
}

// function getLongestDinosaur(dinosaurs) {
//   let bigDinosaur = null;

//   for(const dinosaur of dinosaurs) { // Using conditional ternary operator ?(if statement) truthy:falsy,
//     bigDinosaur = !bigDinosaur || dinosaur.lengthInMeters > bigDinosaur.lengthInMeters ? dinosaur : bigDinosaur //if !bigDinosaur(*is null*) OR dinosaurs 
//   } // that are being iterated are bigger than bigDinosaur then it assigns current biggest dinosaur to bigDinosaur, if not then keep it the same.
//   return bigDinosaur ? {[bigDinosaur.name]: bigDinosaur.lengthInMeters * 3.281} : {}; // using conditional ternary operator bigDinosaur.name(new object that is DYNAMIC and has a 
// } // SINGLE KEY-VALUE PAIR) (KEY is set to the name of the biggest dinosaur)  return bigDinosaur if the biggest dinosaur and multiply lengthInMeters to feet, or return an empty object

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
  for (let dinosaur of dinosaurs) {
    if (id === dinosaur.dinosaurId) { // if the STRING (id) equals dinosaur id
      years = Math.min(...dinosaur.mya) // years EQUALS Math.min(find the smallest value in array) using the spread operator
      return `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.info} It lived in the ${dinosaur.period} period, over ${years} million years ago.`
    }//Math.min takes two arguments if available
  }
  return "A dinosaur with an ID of 'incorrect-id' cannot be found."
}

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. 
 * If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. 
 * For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
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
  let addArr = key;
  const result = [];

  for (let dinosaur of dinosaurs) {
    if (dinosaur[addArr] === undefined) {
      addArr = "dinosaurId"
    }

    if (dinosaur.mya.length === 1 && (mya === dinosaur.mya[0] || mya === (dinosaur.mya[0] -1))) {
      result.push(dinosaur[addArr])
    }
    else if (mya <= dinosaur.mya[0] && mya >= dinosaur.mya[1]) {
      result.push(dinosaur[addArr])
    }
  }
  return result
}

// ✕ should return the IDs of all dinosaurs that were alive approximately at the given time (1 ms)
// ✕ should include dinosaurs with only one `mya` year
// ✕ if the `mya` key is an array of one number, should allow for 1 MYA less than the amount (1 ms)
// ✕ should return an empty array if the year does not match any
// ✕ if the third argument is set, should replace the IDs with the value of the given key
// ✕ if the third argument is set, but to a key that doesn't return a value, should return the ID

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
