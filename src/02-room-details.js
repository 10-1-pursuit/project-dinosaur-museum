/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require('../data/dinosaurs');
const exampleRoomData = require('../data/rooms');
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */

// Plan:

// Goal: Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.

// Steps:
// 1. Create a variable `foundDino`.
// 2. Use the `.find()` method and the inputted `dinosaurName` string to search the `dinosaurs` array to find the dinosaur if it exists. Assign result to `foundDino`.
// 3. Test to see if `foundDino` is `undefined` or not.
// 4. If `foundDino` is `undefined`, return appropriate error message.
// 5. If `foundDino` does exist, reassign the `dinosaurId` to `foundDino`.
// 6. Iterate over the `rooms` array and then iterate over each `rooms.dinosaurs` array to see if any contain `foundDino` id.
// 7. If found, create a `dinoRoom` variable, and assign the `rooms.name` variable to it and return it.
// 8. If not found, return the appropriate error message.

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
	console.log(dinosaurs[0]);
	console.log(rooms[0]);
}
console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData));
/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {}

module.exports = {
	getRoomByDinosaurName,
	getConnectedRoomNamesById,
};
