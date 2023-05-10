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

// Helper function created , which will convert meters into feet.
let nFeet = (meters) => {
  return meters * 3.281;
};

function getLongestDinosaur(dinosaurs) {
  // This actually works better but test will still fail within the Alive Mya function. array is mutated , must understand
  ////////////////
  //let obj = {};
  //if (!dinosaurs.length) {
  //return obj;
  // }
  // run .map
  //let sortedSaurs = dinosaurs.sort(
  //(a, b) => b.lengthInMeters - a.lengthInMeters
  //);
  //let tallestDinosaur = sortedSaurs[0];
  // then .sort .... copy sort and return;
  //obj[tallestDinosaur.name] = nFeet(tallestDinosaur.lengthInMeters);
  //return obj;
  /////////////////////////////////////// Tired my best here it kept mutating the array
  //let sortedSaurs = dinosaurs
  // .slice()
  //.sort((a, b) => b.lengthInMeters - a.lengthInMeters);
  //let dinoNonMutated = sortedSaurs.map((dino) => ({
  //[dino.name]: dino.lengthInMeters,
  // }));
  //return dinoNonMutated;

  if (dinosaurs.length === 0) {
    // takes care of the edge case, checks if the dinosaur array is empty.. if the array is empty there is no longest dinosaur.
    return {};
  }
  let longestDino = dinosaurs[0]; // Variable called longestDino created and is initialized to the first dinosaur in the dinosaurs array
  for (let i = 0; i < dinosaurs.length; i++) {
    // This forloop iterates through the dinosaurs array starting at index[0] for each dinosaur of the loop iteration the condition will check if the dinosaur
    // length in meters is greater than the length of the current longest dinosaur. When the condition is met the code updates the longestDino variable.
    if (dinosaurs[i].lengthInMeters > longestDino.lengthInMeters) {
      longestDino = dinosaurs[i];
    }
  } // The return below returns an object witht he name of the longest dinosaur as the key and the length in feet as its value
  // the helper function then converts the length in meters into length in feet.

  return { [longestDino.name]: nFeet(longestDino.lengthInMeters) };
}
/**¡
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
  // Check if the dinosaur with the specified ID exists.
  let yoshi = dinosaurs.find((dino) => dino.dinosaurId === id); // The find method will return the first dinosaur in the array whos property Id is equal to
  // the specified Id in the given parameter withing the function.

  // If the dinosaur does not exist, return an error message.
  if (!yoshi) {
    return `A dinosaur with an ID of '${id}' cannot be found.`;
  } // Return a string with the dinosaur's description as per
  return `${yoshi.name} (${yoshi.pronunciation})\n${
    yoshi.info
  } It lived in the ${yoshi.period} period, over ${
    yoshi.mya[yoshi.mya.length - 1]
  } million years ago.`;
}
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
  const dinosaurArr = []; // Empty array set up for the pushed information when and if a specified condition is then met.

  for (const dino of dinosaurs) {
    // the for of loop iterates thorugh the array of dinosaurs
    const dinoId = key || "dinosaurId"; // get dinosaurs id.
    if (dino[dinoId] === undefined) {
      // if the dinosaur does not have an Id it will be skipped
      continue;
    }
    const myaAlive = dino.mya; // this vairable will capture the dinosaur mya age
    if (
      myaAlive.length === 1 &&
      (mya === myaAlive[0] || mya === myaAlive[0] - 1) // If the mta range is a sinlge number , check if it is equal to the specified mya
    ) {
      dinosaurArr.push(dino[dinoId]); // if the mya range is two numbers, check if the specified mya is within the range.
    } else if (mya <= myaAlive[0] && mya >= myaAlive[1]) {
      dinosaurArr.push(dino[dinoId]);
    }
  }
  return dinosaurArr;
}
module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
