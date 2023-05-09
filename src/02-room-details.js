/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
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
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  const dinosaur = dinosaurs.find(dino => dino.name === dinosaurName);

  if (!dinosaur) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }

  const room = rooms.find(room => room.dinosaurs.includes(dinosaur.dinosaurId));

  if (!room) {
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  }

  return room.name;
}


// Used, the `.find()` method on the dinosaurs array to find the dinosaur object that matches the given dinosaur name, If the dinosaur cannot be found, an error message is returned.
// Next the function used the `.find()` method on the rooms array to find the room object thatr contains the dinosaur with the matching `dinosaurId`. If the room cannot be found, en error message is returned
// If both the dinsoaur and room are found, the function returns the name of the room. 

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
function getConnectedRoomNamesById(rooms, id) {
  const foundRoom = rooms.find(room => room.roomId === id);

  if (!foundRoom) {
    return `Room with ID of '${id}' could not be found.`;
  }

  const connectedRoomIds = foundRoom.connectsTo;
  const connectedRooms = rooms.filter(room => connectedRoomIds.includes(room.roomId));
  const connectedRoomNames = connectedRooms.map(room => room.name);

  return connectedRoomNames;
}

// The find() method is used to search the array of rooms for the room with the matching roomId.
// An array of connected room IDs is created by accessing the 'connectsTo' property of the foundRoom object.
// The filter() method is used to create an array of rooms that have an ID that matches one of the IDs in the connectedRoomIds array.
// The map() method is used to create an array of room names from the connectedRooms array.
// The array of connected room names is returned.


module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
