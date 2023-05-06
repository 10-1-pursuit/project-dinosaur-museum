const dinosaurs = require("../data/dinosaurs");
const rooms = require("../data/rooms");

function getThreeLongestDinosaurs(dinosaursArrayList){
    let first = .0003
    let firstId = ""
    let second = .0002
    let secondId = ""
    let third = .0001
    let thirdId = ""
    dinosaursArrayList.forEach(dinosaur => {
        if(dinosaur.lengthInMeters > third &&
            dinosaur.lengthInMeters > second &&
            dinosaur.lengthInMeters > first){
                first = dinosaur.lengthInMeters
                firstId = dinosaur.dinosaurId
        }else if(dinosaur.lengthInMeters > third &&
            dinosaur.lengthInMeters > second &&
            dinosaur.lengthInMeters < first){
                second = dinosaur.lengthInMeters
                secondId = dinosaur.dinosaurId
        }else if(dinosaur.lengthInMeters > third &&
            dinosaur.lengthInMeters < second &&
            dinosaur.lengthInMeters < first){
                third = dinosaur.lengthInMeters
                thirdId = dinosaur.dinosaurId
        }
    })
    let firstObj = dinosaursArrayList.find(dinosaur => dinosaur.dinosaurId === firstId)
    let secondObj = dinosaursArrayList.find(dinosaur => dinosaur.dinosaurId === secondId)
    let thirdObj = dinosaursArrayList.find(dinosaur => dinosaur.dinosaurId === thirdId)
    
    return `Top 3 longest dinosaurs:\n\n1. ${firstObj.name} (${firstObj.lengthInMeters} meters)\n2. ${secondObj.name} (${secondObj.lengthInMeters} meters)\n3. ${thirdObj.name} (${thirdObj.lengthInMeters} meters)\n`;
}

function getThreeOldestDinosaurs(dinosaursArrayList){
    return;
}

function getAllSamePeriodDinosaurs(dinosaursArrayList, period){
    return;
}

function getAllSameDietDinosaurs(dinosaursArrayList, diet){
    return;
}

function getAllFactsTogether(dinosaursArrayList){
    // TODO: add all functions with the next format
    /**
     * (The ${} must be filled with the arrays from the result of the functions)
     * 
     * Top 3 longest animlas:
     * FIXME: let arrayFromFunction = function()
     * 1. ${DinosaurFromArray}
     * 2. ${DinosaurFromArray}
     * 3. ${DinosaurFromArray}
     * 
     * Top 3 oldest animals:
     * ...
     * 
    */
    return;
}

console.log(getThreeLongestDinosaurs(dinosaurs))
