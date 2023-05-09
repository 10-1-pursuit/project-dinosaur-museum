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
// return name of room where given dino can be found . IF the dino doesn't exist in dinosaurs ARRAY OR in any rooms return an error message that says so .
//return rooms.name 
// iterate thru rooms ARRAY, n return name of ROOM dino is found in . IF DINO IS NOT IN ROOMS.dino return error.
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  let foundOrNot = false;
  let idOfDino = null;
  for (let eachDino of dinosaurs) {
    // console.log(eachDino)
    if (eachDino.name === dinosaurName) {

      idOfDino = eachDino

      // foundOrNot = true 
      // console.log(idOfDino)
    }
  } if (!idOfDino) {
    return `Dinosaur with name '${dinosaurName}' cannot be found.`;
  }
  for (const roomObj of rooms) {
    for (const dinoObjs of dinosaurs) {
      if (dinoObjs.name === dinosaurName && roomObj.dinosaurs.includes(dinoObjs.dinosaurId)) {
        idOfDino = roomObj.name
        foundOrNot = true
        // console.log(rooms.name)
      }
    }
  }
  // did we find what we were looking for ,if not return error message 
  if (!foundOrNot) {
    return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
    // .map(findName => findName.name)
  }
  return idOfDino
}


// const threeMins = songs.filter(eleThree => eleThree.runtimeInSeconds > 180).forEach(eleThree => console.log(eleThree.title))

// return (rooms.find(findName => findName.name === dinosaurs.rooms ))
// }

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
//  * return an ARRAY of strings where each string is the name of a connnected room to main [given] room. if room Id can't be found return ERROR message.
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
  let arrayOfConnectedRooms = [];
  let objTogetRoomsbyName = {}
  for (let roomObj of rooms) {
    objTogetRoomsbyName[roomObj.roomId] = roomObj.name
    // console.log(roomObj.name)
  }
  if (!objTogetRoomsbyName[id]) {
    return `Room with ID of '${id}' could not be found.`
  }
  let idMatchRoomId = rooms.find((roomIdIsPara) => roomIdIsPara.roomId === id);
  for (let connectingRooms of idMatchRoomId.connectsTo) {
    if (!objTogetRoomsbyName[connectingRooms]) {
      return `Room with ID of 'incorrect-id' could not be found.`
    }
    arrayOfConnectedRooms.push(objTogetRoomsbyName[connectingRooms])
  }
  return arrayOfConnectedRooms
}
module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
