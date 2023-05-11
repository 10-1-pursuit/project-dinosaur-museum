/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
function calculateTicketPrice(ticketData, ticketInfo) {
  let extraTicket = ticketInfo.extras;
  let type = ticketData[ticketInfo.ticketType];
  if (type === undefined) {
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`;
  }
  let price = type.priceInCents[ticketInfo.entrantType];
  if (price === undefined) {
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  }
  if (extraTicket.length === 0) {
    return price;
  }
  for (let info of ticketInfo.extras) {
    let extraType = ticketData.extras[info];
    if (extraType === undefined) {
      return `Extra type '${info}' cannot be found.`;
    }
    let extraPrice = extraType.priceInCents[ticketInfo.entrantType];
    price = price + extraPrice;
  }
  return price;
}

/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */
function purchaseTickets(ticketData, purchases) {
   let ticketSummary = "";
  let finalTicket = ""
  let total = 0
  let finalTicketSummary = ""
  let extraArr = []
  let extraName = ''
  for (let info of purchases) {

    let extraDescription = ""
    let ticketCost = calculateTicketPrice(ticketData, info);  
    let exactCost = ticketCost / 100;
    let singleCost = exactCost.toFixed(2) 
    total +=exactCost
    let finalTotalSum = total.toFixed(2) 
    let type = ticketData[info.ticketType]; // general or membership
    let ticketSummary = `${info.entrantType} ${type.description}: $${singleCost}`
     let extraLength = info.extras  
    finalTicketSummary = ticketSummary.charAt(0).toUpperCase() + ticketSummary.slice(1)

    let extraNameArr = extraLength.map((el) => { 
      let extraDescrip = ticketData.extras[el]
      extraName = extraDescrip.description
      return extraName
      })

let extrasArrStr = extraNameArr.join(", ")
if(extraNameArr.length > 1){
  finalTicket =`${finalTicketSummary} (${extrasArrStr})` 

} else if(extraNameArr.length === 1){
  finalTicket =`${finalTicketSummary} (${extraNameArr})` 
 
}else{
  finalTicket = finalTicketSummary
}


   ticketSummary  = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${finalTicket}\n-------------------------------------------\nTOTAL: $${finalTotalSum}`


   return ticketSummary

   
   }

  }
   









   //  for (let extra of info.extras) {
    //     let extraDescription = ticketData.extras[extra]
       
    //     if(info.extras.length === 0){
    //       finalTicketSummary
    //     }
    //     else if(info.extras.length === 1){
    //       finalTicketSummary = `${finalTicketSummary}(${extraDescription.description})`
    //     }
    //     else if(info.extras.length > 1){
    //       finalTicketSummary = `${finalTicketSummary}${extraDescription.description}, `
    //     }
     
         
    //    }
    //    if(finalTicketSummary[finalTicketSummary.length-2]=== ","){
    //     finalTicketSummary = finalTicketSummary.slice(0,-2)
    //    }







    //   finalT  = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${finalTicketSummary}\n-------------------------------------------\nTOTAL: $${finalTotalSum}`
    // }else if(extraLength.length === 1){
    //   finalT  = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${finalTicketSummary}(${extraDescription.description})\n-------------------------------------------\nTOTAL: $${finalTotalSum}`
    // }else{
    //   finalT  = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${finalTicketSummary}(${extraDescription.description},)\n-------------------------------------------\nTOTAL: $${finalTotalSum}`
    // }
// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
