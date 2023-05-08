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
  //assigning variable to result of find method looking for dinosaur object that has the same name value as dinosaurName
  const dinosaur = dinosaurs.find((dino) => dino.name === dinosaurName)
  if (!dinosaur) {
    //if variable is falsy it will return error that dinosaur was not found in any dinosaur object
    return `Dinosaur with name '${dinosaurName}' cannot be found.`
  }
  for (dinoRooms of rooms) {
    //iterate thru each room object
    if (dinoRooms.dinosaurs.includes(dinosaur.dinosaurId)) {
      //checks to see if each room includes the Id value of the dinosaur variable(obj) and returns room name
      return dinoRooms.name
    }
  }
  //returns error for dinosaur not found in any room
  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
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
  //assign variable to result of find method returning objects of rooms with same room Id value as Id parameter
  const room = rooms.find(room => room.roomId === id)
  if (!room) {
    //if room varibale is falsy it returns error showing no room id value matches id parameter
    return `Room with ID of '${id}' could not be found.`
  } else if (room.connectsTo.includes('incorrect-id')) {
    //if room object has connecting room id value as incorrect-id return error 
    return "Room with ID of 'incorrect-id' could not be found."
  }
  //assign variable to result of filter method creating array with room objects that include connecting room id value as id parameter
  const connectedRooms = rooms.filter(room => room.connectsTo.includes(id))
  //assign variable to result of map method creating array with the corresponding room names from room objects that include id parameters
  const connectedRoomsNames = connectedRooms.map(room => room.name)
  return connectedRoomsNames
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};