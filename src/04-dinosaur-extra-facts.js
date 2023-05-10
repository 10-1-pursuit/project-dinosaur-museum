const dinosaurs = require("../data/dinosaurs");
const rooms = require("../data/rooms");

const formatLine = () => {return "o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o"}

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
    
    return `${formatLine()}\nTop 3 longest dinosaur on earth:\n1. ${firstObj.name} (${firstObj.lengthInMeters} meters)\n2. ${secondObj.name} (${secondObj.lengthInMeters} meters)\n3. ${thirdObj.name} (${thirdObj.lengthInMeters} meters)\n${formatLine()}\n`;
}

function getThreeOldestDinosaurs(dinosaursArrayList){
    let first = .0003
    let firstId = ""
    let second = .0002
    let secondId = ""
    let third = .0001
    let thirdId = ""
    dinosaursArrayList.forEach(dinosaur => {
        if(dinosaur.mya[0] > third &&
            dinosaur.mya[0] > second &&
            dinosaur.mya[0] > first){
                first = dinosaur.mya[0]
                firstId = dinosaur.dinosaurId
        }else if(dinosaur.mya[0] > third &&
            dinosaur.mya[0] > second &&
            dinosaur.mya[0] < first){
                second = dinosaur.mya[0]
                secondId = dinosaur.dinosaurId
        }else if(dinosaur.mya[0] > third &&
            dinosaur.mya[0] < second &&
            dinosaur.mya[0] < first){
                third = dinosaur.mya[0]
                thirdId = dinosaur.dinosaurId
        }
    })
    let firstObj = dinosaursArrayList.find(dinosaur => dinosaur.dinosaurId === firstId)
    let secondObj = dinosaursArrayList.find(dinosaur => dinosaur.dinosaurId === secondId)
    let thirdObj = dinosaursArrayList.find(dinosaur => dinosaur.dinosaurId === thirdId)
    return `${formatLine()}\nTop 3 oldest dinosaurs on earth:\n1. ${firstObj.name} (${firstObj.mya[0]} million years ago)\n2. ${secondObj.name} (${secondObj.mya[0]} million years ago)\n3. ${thirdObj.name} (${thirdObj.mya[0]} million years ago)\n${formatLine()}\n`;
}

function getAllSamePeriodDinosaurs(dinosaursArrayList, period){
    let dinosaurArr = dinosaursArrayList.filter(dinosaur => dinosaur.period === period)
    let names = (dinosaurArr.map(dinosaur => dinosaur.name)).join(', ')
    return `${formatLine()}\nDinosaurs at ${period}:\n${names}\n${formatLine()}\n`;
}

function getAllSameDietDinosaurs(dinosaursArrayList, diet){
    let dinosaurArr = dinosaursArrayList.filter(dinosaur => dinosaur.diet === diet)
    let names = (dinosaurArr.map(dinosaur => dinosaur.name)).join(', ')
    return `${formatLine()}\n${diet} dinosaurs:\n${names}\n${formatLine()}\n`;
}

function getAllFactsTogether(dinosaursArrayList, period, diet){
return `${getThreeLongestDinosaurs(dinosaursArrayList)}\n${getThreeOldestDinosaurs(dinosaursArrayList)}\n${getAllSamePeriodDinosaurs(dinosaurs, period)}\n${getAllSameDietDinosaurs(dinosaurs, diet)}`;
}

console.log(getAllFactsTogether(dinosaurs, "Late Jurassic", "carnivorous"))