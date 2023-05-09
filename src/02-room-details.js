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
// 1. Create `roomName`, `foundDino` variables for found room and dinosaur.
// 2. Use the `.find()` method and the inputted `dinosaurName` string to search the `dinosaurs` array to find the dinosaur if it exists. Assign result to `foundDino`.
// 3. Test to see if `foundDino` is `undefined` or not.
// 4. If `foundDino` is `undefined`, return appropriate error message.
// 5. If `foundDino` does exist, create a variable `foundDinoId` and assign the found dinosaur's id to it.
// 6. Iterate over the `rooms` array and then iterate over each `rooms.dinosaurs` array to see if any contain `foundDino` id.
// 7. If found, create a `dinoRoom` variable, and assign the `rooms.name` variable to it and return it.
// 8. If not found, return the appropriate error message.

function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
	// Create `roomName` variable to hold the room name the dinosaur is found in.
	let roomName;

	// Declare `foundDino` variable to refer to the found dinosaur or if not than `undefined`. Use `.find()` to search for the requested dinosaur by the `dinosaurName` string inputted by the user.
	const foundDino = dinosaurs.find((dino) => dino.name === dinosaurName);

	// Guard clause: if the dinosaur cannot be found at all, return appropriate error message.
	if (foundDino === undefined) {
		return `Dinosaur with name '${dinosaurName}' cannot be found.`;
	}

	// Declare `foundDinoId` for found dinosaur.
	let foundDinoId = foundDino.dinosaurId;

	// Use nested `.forEach()` iterators to search each room object in the `rooms` array and iterate in each room's `dinosaurs` array to check if `foundDinoId` matches any `id`.
	rooms.forEach((room) => {
		// Destructure `name` key of `room`
		const { name } = room;

		room.dinosaurs.forEach((id) => {
			if (id === foundDinoId) {
				// If found, assign `name` to `roomName`.
				roomName = name;
			}
		});
	});

	// if the dinosaur cannot be found in any room, return appropriate error message.
	if (!roomName) {
		return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
	}

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

	// Guard clause: if `foundRoom` is `undefined`, return the appropriate error message.
	if (foundRoom === undefined) {
		return `Room with ID of '${id}' could not be found.`;
	}

	// Destructure `connectsTo` key where the array is.
	const { connectsTo } = foundRoom;

	// Create empty array `connectedRooms` for found room names.
	let connectedRooms = [];

	// Outer loop - loops over `connectsTo` array.
	for (let i = 0; i < connectsTo.length; i++) {
		// Inner loop - loops over the `rooms` array to find match.
		for (let j = 0; j < rooms.length; j++) {
			if (rooms[j].roomId === connectsTo[i]) {
				connectedRooms.push(rooms[j].name);
				break;
			}
			// Guard clause: if connected room id is incorrect, return appropriate error message.
			if (j === rooms.length - 1) {
				return `Room with ID of '${connectsTo[i]}' could not be found.`;
			}
		}
	}

	return connectedRooms;
}

module.exports = {
	getRoomByDinosaurName,
	getConnectedRoomNamesById,
};
