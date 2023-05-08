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
  for (const dinosaur of dinosaurs) {
  if(dinosaur.name === dinosaurName) { // checks if dinosaur.name matches dinosaurName argument

    for (const room of rooms) { //this for of loop is inside the previous if statement and if a match is found it goes through this for of loop
      if (room.dinosaurs.includes(dinosaur.dinosaurId)) { // for each room it checks if it includes dinosaurId of current dinosaur its checking
      return room.name // if there is a match then return the name of the room where dinosaur can be found
    }
    }
     return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.` // if no match in any room, it returns this error message.
    }
  }
  return `Dinosaur with name '${dinosaurName}' cannot be found.` // if there is no match in dinosaur array, then return this error message.
}


/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. 
 * If a room ID cannot be found, an error message is returned.
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
  let addArr = []
  for (const room of rooms) {
    if(room.roomId === id) { // checks if the roomId its looping in equals id
      for (const connect of room.connectsTo){ // if it does match then loop through connectsTo array that the room is currently on.
        const connectRoom = rooms.find(room => room.roomId === connect); //find method   * const connectRoom = rooms.find(function(room) { *
        if(connectRoom) { //searches room for roomId that matches each Id in connectsTo   * return room.roomId === connect *
          addArr.push(connectRoom.name) // If it finds a match it adds name or names from connects * })   *this is same thing as the arrow syntax *
        } else { // if it doesnt find a match return the error message
        return `Room with ID of '${connect}' could not be found.`
        }
      }
    }
    }
    if(addArr.length === 0) { // outside the scope of the for of loops if addArr is empty, it means the original id parameter was not
      return `Room with ID of '${id}' could not be found.` // found in the rooms array so display this error message
  }
  return addArr //returns the string names in connectRoom
}

// console.log(room)
// console.log(id)

// getConnectedRoomNamesById()
// ✕ should return the names of all rooms connected to the given room by ID (1 ms)
// ✕ should work for other rooms (1 ms)
// ✕ if initial room ID is incorrect, should return an error message
// ✕ if connected room ID is incorrect, should return an error message

// Expected: ["Entrance Room", "Coat Check Room", "Ellis Family Hall", "Kit Hopkins Education Wing"]
// Received: undefined

// Expected: ["Ticket Center"]
// Received: undefined

// Expected: "Room with ID of 'incorrect-id' could not be found."
// Received: undefined

// Expected: "Room with ID of 'incorrect-id' could not be found."
// Received: undefined

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
