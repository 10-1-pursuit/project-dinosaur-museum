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
  let found = false; // the line initialize a boolean variable found to false. variabke is used to check if the dinosaur with the given name is found.
  for (const dino of dinosaurs) { // loop through the dinosaurs array and check if the name property of each dinosaur object matches the given  'dinosaur name'.
    if (dino.name === dinosaurName) {
      for (const room of rooms) { // Loop through the rooms array abd check if the dinosaurs property of ech room object includes the dinosaurId of the matching dinosaur.
        if (room.dinosaurs.includes(dino.dinosaurId)) {
          found = true; //found is set to true annd the function returns the name property of the room object.
          return room.name;
        }
      }
      return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
    } // If no room are found to contain the matching dinosaur, the function retruns a message indicating that the dinosaur could not be found in any rooms.
  }
  return `Dinosaur with name '${dinosaurName}' cannot be found.`;
} // No dinosaurs wuth the given name is dound , the function returns a nessage indicating that the dinosaurs could not be found.
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
  let getConnectedRoom = []; // creates an empty array to store the names of connected rooms
  for (const room of rooms) { //iterate over each room object in the array of rooms.
    if (room.roomId === id) { // if the current room object has an Id that matches the given ID.
      for (const connect of room.connectsTo) { // iterate over each connected room ID in the current room object.
        const connectedRoom = rooms.find((room) => room.roomId === connect); // find room object in the array of rooms that has the connected room Id
        if (connectedRoom) { // if a connected room object was found
          getConnectedRoom.push(connectedRoom.name); // add the name of the connected room to the array of connected room names
        } else { // if a connected room object was not found.
          return "Room with ID of 'incorrect-id' could not be found."; // return an error message
        }
      }
    }
  }
  if (getConnectedRoom.length === 0) { // if no connected room names were added to the array
    return "Room with ID of 'incorrect-id' could not be found."; // return an error message
  }
  return getConnectedRoom;// return the array of connected room names
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
