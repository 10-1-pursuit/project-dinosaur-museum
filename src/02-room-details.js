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
  // Declared and assigned variables using native methods.
  // First, check if the dinosaur exists in the `dinosaurs` list. With .find assigned the dinosaur object to the first variable.
  // if no dinosaur is found, return an error message.
  const dinosaur = dinosaurs.find(dinosaur => dinosaur.name === dinosaurName);
  if (dinosaur === undefined) {
    return "Dinosaur with name '" + dinosaurName + "' cannot be found.";
  };
  // Then, check if the dinosaur can be found in any room. With .find chained to .include methods assigned the room object to the second variable.
  // if the dinosaur cannot be found in any room, return an error message.
  // return the name of the room where the dinosaur can be found.
  const room = rooms.find(room => room.dinosaurs.includes(dinosaur.dinosaurId));
  if (room === undefined) {
    return "Dinosaur with name '" + dinosaurName + "' cannot be found in any rooms.";
  };

  return room.name;
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
function getConnectedRoomNamesById(rooms, id) {
  // Declared and assigned variables using native methods.
  // The first variable is assigned the room object by finding the given id that matches the roomId.
  // if the id does not match any of the roomIds in the rooms array, an error will be returned.
  const givenRoom = rooms.find(room => room.roomId === id);
  if (givenRoom === undefined) {
    return "Room with ID of '" + id + "' could not be found.";
  };
  // The second variable is assigned the roomIds of the rooms connected to the given room.
  // Declared a variable to hold the roomId from the connected room ids array that does not match any of the roomIds in the rooms array.
  // Using the .forEach method we compare each Id from connectedRoomIds array to the roomIds from the rooms array and set the Id that return false to the previously declared variable.
  const connectedRoomIds = givenRoom.connectsTo;
  let incorrectId;
  connectedRoomIds.forEach(Id => {
    if (rooms.some(room => room.roomId === Id) === false) {
      incorrectId = Id;
    }
  });
  // if the incorrectId holds a value that returns true (!== undefined) then the error message below is returned.
  if (incorrectId) {
    return "Room with ID of '" + incorrectId + "' could not be found.";
  };
  // Declared a variable to hold the result array which we obtain by chaining the .map and .find methods to first go throught each element in connectedRoomIds and return a string of the Room names for each Ids.
  const result = connectedRoomIds.map(roomId => {
    return rooms.find(room => room.roomId === roomId).name;
  });

  return result;
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
