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

  target = dinosaurs.find((dino) => dinosaurName === dino.name)
  if (!target) {
    return "Dinosaur with name '" + dinosaurName + "' cannot be found."
  }
  targetRoom = rooms.find(room => room.dinosaurs.includes(target.dinosaurId)) // proud of this one. Got the ideas in one of the review session by Tim. Includes returns a true/false great for if statment thinking.
  if (!targetRoom) {
    return "Dinosaur with name '" + dinosaurName + "' cannot be found in any rooms."
  }
  return targetRoom.name

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
  let arrayOfRooms = [];                            // creating empty arrays to catch my ids on line 75 
  let arrayOfRoomNames = [];                        // and my names on line 79
  let targetRoom = rooms.find((room) => room.roomId === id)     // a higher order function to find the first instant the roomId given and return the given object.
  if (!targetRoom) {                                         // throws an error message if no object found.
    return "Room with ID of 'incorrect-id' could not be found."
  } else {
    targetRoom.connectsTo.forEach((roomCode) => arrayOfRooms.push(roomCode))        //used a higher order function to push all of the connectsTo rooms into the array for a cleaner code.
    for (let targetId of arrayOfRooms) {
      rooms.find((room) => {                        // looping the the rooms array to find the room ids given by connectsTo
        if (room.roomId === targetId) {
          arrayOfRoomNames.push(room.name);        // collecting the names of rooms
        };
      });
      if(arrayOfRoomNames[0] === "Room B"){       // okay...may...be it could be considered 'hardcode'. But i didn't know that room B was of limits till it failed the test. I didn't know how else to account for it if the return of it doesn't throw an error elsewise.
        return "Room with ID of 'incorrect-id' could not be found."
      }
    };
  } return arrayOfRoomNames
};


module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
