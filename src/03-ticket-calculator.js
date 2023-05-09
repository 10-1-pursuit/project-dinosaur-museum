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

  let ticketEntrant = ticketInfo.entrantType;
  let ticketAdmissionsType = ticketInfo.ticketType;
  let ticketMenuAndPrices = ticketData.general.priceInCents
  let ticketWithAddOns = ticketInfo.extras
  let invalidEntryType = undefined;
  let howMuchExtraForThis = 0;


  if (ticketData[ticketAdmissionsType] === invalidEntryType) {
    return "Ticket type 'incorrect-type' cannot be found."
  }

  if (ticketData[ticketEntrant] === invalidEntryType) {
    return "Entrant type 'incorrect-entrant' cannot be found."
  }

  for (let addons of ticketWithAddOns) {
    if (ticketData.extras[addons] === invalidEntryType) {
      return "Extra type 'incorrect-extra' cannot be found."
    }
    if (ticketData.extras[addons].priceInCents[ticketEntrant]) {
      howMuchExtraForThis += ticketData.extras[addons].priceInCents[ticketEntrant]
    }
  }
  let ticketPrice = ticketData[ticketAdmissionsType].priceInCents[ticketEntrant]
  return ticketPrice + howMuchExtraForThis;

}

calculateTicketPrice(exampleTicketData)



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

  let genOrMemTicket = purchases[].ticketType
  let ageOfEntrant = purchases[].entrantType
  let addOnsToTickets = purchases[].extras
  let ticketPrice = 0;
  let perks = 0;
  let totalPrice = 0

  const purchases = ticketData.map((ticketItinerary) => {
    [ticketItinerary.ticketType]: (ticketItinerary.genOrMemTicket), [ticketItinerary.entrantType]: (ticketItinerary, ageOfEntrant), [ticketItinerary.extras]: (ticketItinerary.addOnsToTickets)
  })


  let receipt = `“This is a DinoWorld ${ticketItinerary.genOrMemTicket} admission ticket permits only 1 ${ticketItinerary, ageOfEntrant} 
  admission for the Dinosaur Museum.The total price is $${sum} and includes the dinosaur exhibits and dinosaur souvenir shop.
  Any extras are excluded, and may be purchased upon availability during your visit. Thank you for your purchase and enjoy your visit at the Dinosaur Museum."`

  let receiptForMembersOnly = `"This is a DinoWorld ${ticketItinerary.genOrMemTicket} admission ticket for Dinosaur Museum. This ticket permits admission for one adult only at a 
  discounted membership price of ${ticketPrice}. This ticket includes no extra add ons. ${totalPrice} "`

  let receiptForPerks = 


}
purchaseTickets(exampleTicketData)
// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
