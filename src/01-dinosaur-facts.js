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
  // Returns an empty object if the argument is empty
  if(dinosaurs.length === 0){return {};}
  // Keeps track of the current length of the longes dinosaur
  let currentDinosaurLength = 0
  // Keeps track of the current ID of the longes dinosaur
  let currentDinosaurID = 0
  // Goes through all dinosaurs, replacing the current dinosaur length and ID if a longer dinosaur is found
  dinosaurs.forEach(dinosaur => {
    if(!currentDinosaurLength){
      currentDinosaurLength = dinosaur.lengthInMeters
    }
    else{
      if(currentDinosaurLength < dinosaur.lengthInMeters){
        currentDinosaurLength = dinosaur.lengthInMeters
        currentDinosaurID = dinosaur.dinosaurId
      }
    }
    return;
  })
  // Finds the longes dinosaur object with the ID saved in the currendDinosaurID variable
  tallestDinosaurObj = dinosaurs.find(dinosaur => dinosaur.dinosaurId === currentDinosaurID)
  // Converts the dinosaur's length from meters to feet
  const lengthInFeet = (meters) => meters * 3.281
  // Returns an object with the name of the dinosaur as the key, and the dinosaur's length as the value
  return {[tallestDinosaurObj.name] : lengthInFeet(tallestDinosaurObj.lengthInMeters)};
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
  // looks up the target dinosaur and creates a variable with the object of the dinosaur
  const dinosaurTarget = dinosaurs.find(dinosaur => dinosaur.dinosaurId === id)
  // Displays the information of the dinosaur if the dinosaurTarget variable is not empty
  if(!!dinosaurTarget){
    return `${dinosaurTarget.name} (${dinosaurTarget.pronunciation})\n${dinosaurTarget.info} It lived in the ${dinosaurTarget.period} period, over ${dinosaurTarget.mya[dinosaurTarget.mya.length - 1]} million years ago.`
  }else{ //Displays an error if variable is empty
    return `A dinosaur with an ID of '${id}' cannot be found.`
  }
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
  let dinosaurArr = []
  let newArr = []
  dinosaurs.forEach(dinosaur => {
    if(dinosaur.mya.length === 1){
      if(dinosaur.mya >= mya && dinosaur.mya <= mya + 1){
          dinosaurArr.push(dinosaur)
      }
    }else{
      if(dinosaur.mya[0] >= mya && dinosaur.mya[1] <= mya){
          dinosaurArr.push(dinosaur)
      }
    }
  })
  const dinosaurKeys = Object.keys(dinosaurs[0])
  if(dinosaurKeys.some(currentKey => currentKey === key)){
      newArr = dinosaurArr.map(dinosaur => dinosaur[key])
  }else{
    newArr = dinosaurArr.map(dinosaur => dinosaur.dinosaurId)
  }
  return newArr;
}

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
