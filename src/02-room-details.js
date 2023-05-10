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

// for( const revenue of data){
//   for(const prod of revenue.transactions){
//     for(const worth of prod.products.priceInCents){
//   }
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
  for (const dino of dinosaurs) {//for loop to search through the array of dinos
    for (const roomLook of rooms) {// 2nd for loop to search through array of rooms

      if (roomLook.connectsTo === dino.dinosuarId && dino.dinosuarName === dinosaurName && dino.dinosuarId === roomLook.dinosaurs) {
        // if (roomLook.dinoasuars>0 && rooms ===roomLook.roomId && dinosaurName=== dino.name&& dino.dinosuarId=== roomLook.dinosaurs){
        return roomLook.name //setup my Boolean if these values are true then return the rooms name. 
      }
      if (dino.dinosaurId !== roomLook.dinosaurs) {
        // if dinosaurs.length is greater or equal than one so i can see if a dinosaur exist in the room.
        //If dino exist return roomLook.name which is the room the dinosaur woiuld be in
        return `Dinosaur with name '${dinosaurName}' cannot be found.`;// if no dinosuar is found return this message
      }


    }

  }
}

console.log(getRoomByDinosaurName(exampleDinosaurData, exampleRoomData, "Tyrannosaurus"));// invoking function with the parameters

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
 *///if id is equal to room id i want to reutrn the name of all the rooms, if no room id is found return an error message
 // i room equals room id i want to return all connect to rooms
function getConnectedRoomNamesById(rooms, id) {
  for (let idLook of rooms) {
    if (id === idLook.connectsTo ) {
      return idLook.name
    } else 

      if (id === idLook.roomId) {

        return idLook.connectsTo

      } else {

        if (idLook.roomId===0 && idLook.roomId !== id) {

          return "Room with ID of " + "'incorrect-id'" + " could not be found.";
        
        }

        }
      }
    }
   

console.log(getConnectedRoomNamesById(exampleRoomData, "A6QaYdyKra"))

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
