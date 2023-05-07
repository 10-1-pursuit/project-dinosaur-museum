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
  //console.log(`hey , ${dinosaurName}`)
  //return room name where Dino can be found
  //ELSE if it's not in "dinosaurs" or in "rooms" return error message

  let foundDinosaur = null; //placeholder for dino name
  let foundInRoom = false //placeholder for dino in room

  for (const room of rooms) { //iterate through rooms
    for (const dinosaur of dinosaurs) { //iterate through dinos
      //console.log(dinosaur)
      if (dinosaur.name === dinosaurName && room.dinosaurs.includes(dinosaur.dinosaurId)) { //dinoName matches param & room has same dino(by id to match name)
        foundDinosaur = room.name; //placeholder becomes room name
        foundInRoom = true; //dino is in room
      }
    }
  }

  if (!foundDinosaur && !foundInRoom) { //true values 
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
  } else if (!foundDinosaur) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }

  return foundDinosaur;
}


//console.log(exampleRoomData)
// {
//   roomId: 'Y707HL8uP9',
//   name: 'Roberts Room',
//   requiredTicketPermissions: [],
//   dinosaurs: [ 'wuL4ddBinQ' ],
//   connectsTo: [ 'VEr3w2ca_v', 'dBZeK6vhpt', 'Gp6nCN1JGT' ]

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
function getConnectedRoomNamesById(rooms, id) {}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
