// Creating a SCRATCH PAD FOR NOTES/IDEAS AND STEP GUIDE

//function getLongestDinosaur(dinosaurs) {}



// function getDinosaurDescription(dinosaurs, id) {
//     for (let dino of dinosaurs) {  // tried to use .find function for cleaner code but couldn't use it how i wanted it.
//       if (dino.dinosaurId === id) {
//         if (dino.mya.length === 2) {  // used an if statement to check on the MYA and how many index's it had.
//           return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${dino.mya[1]} million years ago.`
//         } else {
//           return `${dino.name} (${dino.pronunciation})\n${dino.info} It lived in the ${dino.period} period, over ${dino.mya[0]} million years ago.`
//         };
//       };
//     }; return "A dinosaur with an ID of '" + id + "' cannot be found."
//   };


/*

Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
search through the dino list to compare name given with dinosaurs.diand dinosaurs.
and rooms list rooms.name

equate nameGiven w/ dinosaurs.dinosaursID w/ roooms.dinosaurs
make vars for dinoId



function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
 let target = null;
 let targetRoom = null;
  for( let dino of dinosaurs){
   if(dinosaurName === dino.dinosaurId){
    let target = dino.dinosaurId;
   } else return "Dinosaur with name '" + dinosaurName +"' cannot be found in any rooms"
 };
   targetRoom = rooms.find((room) => room.dinosaurs == target)
   if(target === targetRoom){
    return target.name
   }else {
    return "Dinosaur with name '" + dinosaurName +"' cannot be found."
   }
};















*/