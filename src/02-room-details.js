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
  let target = null;
  let targetRoom = null;

  target = dinosaurs.find((dino) => dinosaurName === dino.name); // The .find (highOrderFunction) will find a specified dinosaur name and compare it aganist the parameter of the given function
  if (!target) {
    // If the dinosaur is not found edge case
    return "Dinosaur with name '" + dinosaurName + "' cannot be found."; // edgcase tester return
  }
  targetRoom = rooms.find((room) => room.dinosaurs.includes(target.dinosaurId)); // The .find (HOF) will find the room that the dinosaur is in.( see dinosaur name target variable)
  if (!targetRoom) {
    // edge case aganist if the room is not found, return string below.
    return (
      "Dinosaur with name '" + dinosaurName + "' cannot be found in any rooms." // edgecase tester return
    );
  }
  return targetRoom.name; //(return the name of the room if the room is found) return the target room.name from the .find higher order function
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
  // First find the room with the specified ID
  let room = rooms.find((room) => room.roomId === id); //Finding the exact room in which to test an argument aganist ..... then satisify the functions edge case
  if (!room) {
    return `Room with ID of '${id}' could not be found.`; //checks for edge case,in the event that the room could not be foudn by it ID.
  }
  let connectedRoomNames = []; // empty array created that will store the names of the conncted rooms.
  for (let i = 0; i < room.connectsTo.length; i++) {
    // The for loop will iterate through the connectsTO array
    let connectedRoomId = room.connectsTo[i]; // the Id's of the connected rooms are then store in the comnnectedRoomId vairable
    let connectedRoom = rooms.find((room) => room.roomId === connectedRoomId); // the find function is created that will compare room.roomId to connectedId
    if (!connectedRoom) {
      // edge case, if the conected room was not found return error message below.
      return `Room with ID of '${connectedRoomId}' could not be found.`; // looping though each ID in 'connectsTo' to find 'room'; using .find method to search room in 'rooms'
    }
    connectedRoomNames.push(connectedRoom.name); // add the name of the connected room to the array.
  }
  return connectedRoomNames; //returning array with all connectedTo rooms that has been stored to our pushed variable.
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
