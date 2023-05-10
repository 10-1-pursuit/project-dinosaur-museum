for (let dinoObj of dinosaurs) { // loop dinos
    if (dinoObj.name === dinosaurName) { //if thhe obj name same as param dN, 
      for (let each of rooms) { //loop rooms now since I have a dino name ✔️
        if (each.dinosaurs.includes(dinosaurName)) { // does this room obj match dN in param ? 
          return each.name // rooom name
        }
        return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
      }
    }
  
return `Dinosaur with name '${dinosaurName}' cannot be found.`
}


let foundDinosaur = null; //placeholder for dino name
let foundInRoom = false; //placeholder for dino in room
if (!foundDinosaur) {
  return `Dinosaur with name '${dinosaurName}' cannot be found.`;
}

for (const room of rooms) {
  //iterate through rooms
  for (const dinosaur of dinosaurs) {
    //iterate through dinos
    //console.log(dinosaur)
    if (
      dinosaur.name === dinosaurName &&
      room.dinosaurs.includes(dinosaur.dinosaurId)
    ) {
      //dinoName matches param & room has same dino(by id to match name)
      foundDinosaur = room.name; //placeholder becomes room name
      foundInRoom = true; //dino is in room
    }
  }
}

if (!foundDinosaur && !foundInRoom) {
  //true values
  return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`;
}

return foundDinosaur;



  // let dinoName = " "

  // for(let oneDino of dinosaurs){
  // dinoName = oneDino.dinosaurId
  // console.log(oneDino.name) //- dinoIds
  // }
  // for (let room of rooms) {
  //     //   console.log(room.name);
  //     for (let dino of room.dinosaurs) {
  //       //     console.log(dino);
  //       if (dino === dinosaurName) {
  //     //       //no dino in room
  //      console.log(dino);

       
  //     }

  for (let roomObj of rooms) {
    //console.log(roomObj.roomId)
      //connected Id not match param id
      //connection = roomObj.connectsTo


    for (let connected of roomObj.connectsTo){ // connected room ids
      //console.log(connected)

      if ( roomObj.roomId === id ) { //yes
       // console.log("roomid", roomObj.roomId, "connectsto",connected, "param" , id)
         connected = roomObj.name
         arrOfRooms.push(connected)

      }
  const searchBarFilterDemo = arrayOfFellows.filter ((eachFellow) => eachFellow.name.toLowerCase().includes




  if (connection === connectedRoom) {
    //connectedRoom = room.name;
    //console.log(connection)
  }


     // for (const entrantType in ticketData[ticketType].price) {
      //   //loop price obj of the ticket type
      //  
        // if (entrantType === ticketInfo.entrantType) {
        //   //does what i find match oaram entrant type

        //   entrant = ticketData[ticketType].priceInCents[entrantType]; // reassign to the PRICE
      


         //if (!entrant) {
  // if value is not there/null
  //return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  //}
  //price += entrant; //elsewise, value becomes price

  // for (const extraFeature in ticketData.extras) {

  //   //loop ticket info for extras

  //   if (!ticketData.extras || !ticketData.extras[extra]) {
  //     //if none
  //     return `Extra type '${ticketInfo.extras}' cannot be found.`;
  //   }
  //   price += ticketData.extras[extra].priceInCents; // reassign price
  // }
  // return price;


   //console.log(!!Object.keys(ticketData.extras).length)
  // for (let extra of ticketInfo.extras) {
  //   if (!ticketData.extras[extra]) {
  //     return `Extra type '$incorrect-extra' cannot be found.`;
  //   }
  // }