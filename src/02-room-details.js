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

  for (let dinoInfo of dinosaurs) {
    let searchKeywordByDinosaurName = dinosaurs.name;
    if (searchKeywordByDinosaurName === dinosaurName) {
      let searchKeywordByDinoID = dinoInfo.dinosaurId;

      for (roomInfo of rooms) {
        let suiteName = roomInfo.name;
        if (roomInfo.dinosaurs.includes(searchKeywordByDinoID)) {
          return suiteName;
        }
      }
      return `Dinosaur with name "${searchKeywordByDinosaurName}" cannot be found in any rooms.`;
    }
  }
  return `Dinosaur with name "${searchKeywordByDinosaurName}" cannot be found.`
}

// const adjacentRooms = roomInfo.name
// const roomNextDoor = roomInfo.connectsTo;
// console.log(adjacentRooms)
//   const findPinkElephants = songs.find((findTimestreetsPinkElephants => findTimestreetsPinkElephants.title === "Pink Elephants")

// for (let i = 0; i <= rooms.dinosaurs.length; i++) {
//   return arrayofDinoIDsFromRooms.push(rooms.dinosaurs)
// }
// console.log(arrayofDinoIDsFromRooms)
// }


// const searchKeywordByID = dinosaurs.dinosaurId;
// const returnSearchForRoom = rooms.name;
// const returnConnectedRooms = rooms.connectsTo;

// const dinosaurRoomGuide = rooms.find((searchKeyword) => {
// if (!searchKeywordByDinosaurs) {
//   return `"Dinosaur with name ${searchKeywordByDinosaurs} cannot be found."`

// }
// else if (searchKeywordByDinosaurs !== returnSearchOfRoom) {
//   return `"Dinosaur with name ${searchKeywordByDinosaurs} cannot be found in any rooms."`
// }
// else if (searchKeywordByDinosaurId === true) {
//   return returnConnectedRooms
// }

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data / rooms.js` file for an example of the input.
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
function getConnectedRoomNamesById(rooms, id) { }

//   for (let roomInfo of rooms) {
//     const searchKeywordByRoomID = roomInfo.roomId;
//     const invalidDinoIDSearch = `"Room with ID of ${searchKeywordByDinoID} could not be found."`
//     if (searchKeywordByRoomID)
// }

// }

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
