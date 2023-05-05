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
// 5. If `foundDino` does exist, create a variable `foundDinoId` and assign the found dinosaur's id to it.
// 6. Iterate over the `rooms` array and then iterate over each `rooms.dinosaurs` array to see if any contain `foundDino` id.
// 7. If found, create a `dinoRoom` variable, and assign the `rooms.name` variable to it and return it.
// 8. If not found, return the appropriate error message.

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
	// Create a variable `roomName` to either hold the room name the dinosaur is found in or one of the 2 expected error messages based on conditions.
	let roomName;

	// Create a variable `foundDino` to refer to the found dinosaur or if not than `undefined`. Use `.find()` to search for the requested dinosaur by the `dinosaurName` string inputted by the user.
	let foundDino = dinosaurs.find((dino) => dino.name === dinosaurName);
	// Create a variable `foundDinoId`.
	let foundDinoId;

	// If `foundDino` is exists, then assign the associated id at the `dinosaurId` key to it. We need it to search the `rooms` array, since only the dinosaurs' ids are found there.
	if (foundDino) {
		foundDinoId = foundDino.dinosaurId;

		// Build a nested for loop in order to check every array containing the dinosaur ids assigned to each `room` object's `dinosaurs` key. Every `room` is located at each index of the `room` array.
		for (let i = 0; i < rooms.length; i++) {
			for (let j = 0; j < rooms[i].dinosaurs.length; j++) {
				// Access each `dinosaurs` array's id and assign it to a variable `foundDinoIdInRoom`.
				let foundDinoIdInRoom = rooms[i].dinosaurs[j];
				// If `foundDinoId` from `dinosaurs` matches `foundDinoIdInRoom`, the dinosaur is in said room.
				if (foundDinoIdInRoom === foundDinoId) {
					// Assign the name of said room at the `name` key to `roomName`.
					roomName = rooms[i].name;
					// Return the room name string.
					return roomName;
				}
			}
		}
		// If `roomName` is `undefined` meaning the dinosaur wasn't found in any of the rooms, assign the appropriate error message, interpolating the inputted `dinosaurName` from the user.
		roomName = `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
		// If the dinosaur wasn't found in `dinosaurs` or any of the rooms, assign the appropriate error message to `roomName`.
	} else {
		roomName = `Dinosaur with name '${dinosaurName}' cannot be found.`;
	}

	// Return `roomName` either with the room name of found dinosaur or the appropriate error message based on conditions.
	return roomName;
}
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

// Plan:

// Goal: Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.

// Steps:
// 1. Search through all the rooms using the inputted room id from the user.
// 2. If room is found according to the inputted id, access the `connectsTo` array.
// 3. Iterate over the said `connectsTo` array.
// 4. Get each element (i.e. maybe use a native array method) and search the `rooms` array to see if it exists.
// 5. If it doesn't return appropriate error message.
// 6. If it exists, use a callback function to create a new array with the `name` of room instead of the `roomId`.
// 7. Return the new string array of all the found connected rooms.

function getConnectedRoomNamesById(rooms, id) {
	// Use `.find()` to search for room by the inputted `id`.
	let foundRoom = rooms.find(({ roomId }) => roomId === id);
	console.log(foundRoom);
	let connectedRooms;

	// Guard clause: if `foundRoom` is undefined, return the appropriate error message.
	if (foundRoom === undefined) {
		return `Room with ID of '${id}' could not be found.`;
	}

	// Destructure `connectsTo` key where the array is.
	const { connectsTo } = foundRoom;

	connectedRooms = rooms
		.filter(({ roomId }) => {
			if (connectsTo.includes(roomId)) {
				return roomId;
			}
		})
		.map(({ name }) => name);

	//
	// `Room with ID of '${roomId}' could not be found.`;
	// test = test.map(({ name }) => name);
	// console.log(test);
	// connectedRooms = connectsTo.find((connectedId) => {
	// 	if (connectedId === roomId) {
	// 		return name;
	// 	}
	// });

	// console.log(connectsTo, roomId, name);
	// return connectedRooms;
}
console.log(getConnectedRoomNamesById(exampleRoomData, 'zwfsfPU5u'));

module.exports = {
	getRoomByDinosaurName,
	getConnectedRoomNamesById,
};
