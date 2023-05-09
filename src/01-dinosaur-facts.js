/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require('../data/dinosaurs');
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

// Plan:

// Goal: Function returns an object with the longest dinosaur from the list. Converts from meters to feet.

// Steps:
// 1. Iterate over the `dinosaurs` array of objects (i.e. each object is a dinosaur).
// 2. Find the longest dinosaur. Access the `lengthInMeters` key/value pair. Use the `.reduce()` method.
// 3. Access the value of the found dinosaur's length.
// 4. Convert the length to feet from meters: multiply the meters by `3.281`.
// 5. Assign the converted value to a variable.
// 6. Return a new object with the value of the name of dinosaur as the key and the converted value of the length as the value.

function getLongestDinosaur(dinosaurs) {
	// Guard clause: if `exampleDinosaurData` is empty return {}.
	if (dinosaurs.length < 1) {
		return {};
	}

	// Find the longest dinosaur using `.reduce()` method, saving to `longestDino`.
	let longestDino = dinosaurs.reduce((a, b) => {
		if (a.lengthInMeters > b.lengthInMeters) {
			return a;
		} else if (a.lengthInMeters < b.lengthInMeters) {
			return b;
		} else {
			return a;
		}
	});

	// Destructure keys of `longestDino`.
	const { name, lengthInMeters } = longestDino;
	// Convert length to feet from meters.
	const convertDinoValue = lengthInMeters * 3.281;

	// Return new object.
	return { [name]: convertDinoValue };
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

// Plan:

// Goal: Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.

// Steps:
// 1. Use the `.find()` method to find a dinosaur in the `dinosaurs` array passing in the string `id` inputted by the user and store it to a variable `foundDino`.
// 2. Create a guard clause to check if the value of `foundDino` is `undefined` or not (i.e. whether it exists in the array or not).
// 3. If `foundDino` is `undefined`, return a properly error message string.
// 4. If `foundDino` contains the found dinosaur object, destructure the necessary keys to be used to return a properly formatted string, describing the dinosaur.
// 5. Return the properly formatted string describing the found dinosaur.

function getDinosaurDescription(dinosaurs, id) {
	// Use the `.find()` method to find a dinosaur in `dinosaurs`.
	const foundDino = dinosaurs.find((dino) => dino.dinosaurId === id);

	// Guard clause: if `foundDino` cannot be found, return an error message.
	if (foundDino === undefined) {
		return `A dinosaur with an ID of '${id}' cannot be found.`;
	}

	// Destructure keys from `foundDino`.
	const { name, pronunciation, info, period, mya } = foundDino;

	// Return appropriately formatted description string, using the destructured keys from `foundDino`. Use the lower value if more than 1 in the `mya` array (i.e. `mya[mya.length - 1]`), because the description says over the number of years and if more than one element then the first is larger.
	return `${name} (${pronunciation})\n${info} It lived in the ${period} period, over ${
		mya[mya.length - 1]
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

// Plan:

// Goal: Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.

function getDinosaursAliveMya(dinosaurs, mya, key) {
	// Takes care of default. Create a variable `keyOrId` and assign the optional `key` inputted by the user to it.
	let keyOrId = key;

	// Guard clause: if inputted `key` by user is not in each object of `dinosaurs` or the user doesn't put a `key` in, assign the value of `dinosaurId` to `keyOrId`.
	if (key === undefined || dinosaurs[0][key] === undefined) {
		keyOrId = 'dinosaurId';
	}

	// Use `.filter()` according to the inputted `mya` value and the provided criteria in JSDoc.
	let dinoAliveMya = dinosaurs
		.filter((dino) => {
			// Variables for setting the `mya` range.
			let low = dino.mya[dino.mya.length - 1];
			let high = dino.mya[0];

			if (dino.mya.length > 1) {
				// Setting a range for `mya`.
				if (mya <= high && mya >= low) {
					return dino[keyOrId];
				}
				// If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
			} else if (mya === high || mya === high - 1) {
				return dino[keyOrId];
			}
		}) // Create a new array with `.map()` and add the appropriate value based on key in `keyOrId` which is either the `dinosaurId`(s) of the filtered dinosaurs or the values according to the key passed in by the user.
		.map((dino) => dino[keyOrId]);

	return dinoAliveMya;
}

module.exports = {
	getLongestDinosaur,
	getDinosaurDescription,
	getDinosaursAliveMya,
};
