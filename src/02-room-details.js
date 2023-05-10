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
  // variables established outside of function
  let dinoNameId = ''
  let roomName = ''
  // 'route by example tyrannosaurus'
  //console.log("established route", dinosaurs[14].name) // Tyrannosaurus
  for (let dino of dinosaurs) {
    if (dino.name === dinosaurName) {
      //console.log('from forOf Loop', dino.name)
      dinoNameId = dino.dinosaurId
      // console.log('dinoNameId', dinoNameId)
    }//end if 
  }// end dinosaurs forOf
  if (dinoNameId === "") {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`
  }// if end for error
  //console.log(rooms[8].dinosaurs[0]) // wuL4ddBinQ
  for (let room of rooms) {
    // console.log('2nd forOf',room.dinosaurs)
    for (let dino of room.dinosaurs) {
      // console.log('actual dino in room', dino)
      if (dino === dinoNameId) {
        //console.log('room name', room.name)
        roomName = room.name
        return roomName
      }// end of room if
    }//end forOf dino/rooms
  }// end forOf room/rooms
  //console.log(rooms[8].name) // Roberts Room

  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
}// end function

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
function getConnectedRoomNamesById(rooms, id) { }

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};