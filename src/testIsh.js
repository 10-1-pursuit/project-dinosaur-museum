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