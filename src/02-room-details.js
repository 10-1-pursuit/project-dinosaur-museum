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
  // Filters the dinosaur object
  let id = dinosaurs.find(dinosaur => dinosaur.name === dinosaurName)
  // Returns an error if dinosaur was not found
  if(!id){return `Dinosaur with name '${dinosaurName}' cannot be found.`}
  // Changes the id value to the dinosaur's ID only
  id = id.dinosaurId
  // Searches within rooms to find where is the dinosaur's ID found
  let roomFound = rooms.find(room => room.dinosaurs.find(dinosaur => dinosaur === id))
  // Returns an error if dinosaur was not found on any room
  if(!roomFound){return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`}
  // Returns the name of the room where the dinosaur's ID was found
  return roomFound.name
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
  // Gets the room's object
  let roomTarget = rooms.find(room => room.roomId === id)
  // Returns an error if room was not found
  if(!roomTarget){return `Room with ID of '${id}' could not be found.`}
  // Stores an array of the room's connected rooms IDs
  let connectedRoomsId = roomTarget.connectsTo
  // This array will store the name of the connected rooms
  let connectedRoomsNames = []
  for(const x of connectedRoomsId){
    // Adds the object of the connected room to the connectedRoomsNames array
    connectedRoomsNames.push(rooms.find(room => room.roomId === x))
    // Returns an error if room ID was not found
    if(!connectedRoomsNames[connectedRoomsNames.length - 1]){
      return `Room with ID of '${x}' could not be found.`
    }
  }
  // Returns an array of the names of the connected rooms
  return connectedRoomsNames.map(rooms => rooms.name)
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
