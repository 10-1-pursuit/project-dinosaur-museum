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
  // What they want:
  // Return an object where the key is the name of the tallest dino and the values are the height of the dino in feet
  // Retrieve the dino's name from the dinosaurs array[]
  // - Loop(For , For of...)
  // - . notation / ["notaion"] to get the dino's name
  // Retrieve the dino's lengthInMeters/Height and convert it to feet
  // - . notation / ["notaion"] to get the dino's height
  // Put both data into an object where the name are the keys and height is the value
  // - Destructuring? const { } = dinosaurs
  // If multiple dinosaurs are the same length return the one whos name comes first
  // Return an empty object if there are no dinosaurs

  let num = 0
  let tallestDino = {};

  for (const { name, lengthInMeters } of dinosaurs) {
    // const { name, lengthInMeters } = dinoObj;

    let lengthInFeet = lengthInMeters * 3.281
    // console.log("Dino's name: ", name, "Dino's length in ft: ", lengthInFeet)

    if (lengthInFeet > num) {
      num = lengthInFeet
      // console.log(num)

      // if (!tallestDino.lengthInFeet || lengthInFeet > tallestDino.lengthInFeet) {}

      // console.log({ [name]: lengthInFeet })
      // To have some as a key and something else as a value you need brackets and a colon(:).
      // Having only the name and a comma will give you "name" and "lengthInFeet" as the key
      tallestDino = { [name]: lengthInFeet }

    }
    // // console.log("Dino's Name: ", name, "Dino's Height: ", lengthInMeters);

    // console.log({ [name]: lengthInFeet })

    // Object.assign(tallestDino, { name: lengthInMeters });

    // console.log(newObj);

  }
  return tallestDino;
  // console.log("This is the tallest Dinosaur(Brachiosaurus): ", tallestDino);
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
  // What do they want:
  // Returns a description of the dinosaur based on a given id and if the dinosaur cannot be found returns an error message.
  // How to do it:
  // First access the elements in the main array
  // - For Loop
  // Then access the dinosaurs by the ID
  // - dot(.)notation
  // Should work for dinosaurs with only 1 value in 'mya'
  // - Some type of comparison meaning if statement



  for (const { dinosaurId, name, pronunciation, period, mya, info } of dinosaurs) {
    let dinoId = dinosaurId;

    // console.log(dinoId)
    // console.log(oneMyaVal)
    // console.log(id)

    // console.log(Math.max(mya))

    // console.log(mya.map((myaArr) => { myaArr }))


    if (dinoId === id) {
      return `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${mya.slice(-1)} million years ago.`
    }
    // else {
    //   return "A dinosaur with an ID of 'incorrect-id' cannot be found.";
    // }

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
function getDinosaursAliveMya(dinosaurs, mya, key) { }

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
