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
  // checks if ticket type is either general or membership, if not return ticket type error
  if (!(ticketInfo.ticketType === "general" || ticketInfo.ticketType === "membership")) {
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
    // checks if entrant type is either child, adult or senior, if not return ticket entrant error
  } else if (!(ticketInfo.entrantType === "child") && !(ticketInfo.entrantType === "adult") && !(ticketInfo.entrantType === "senior")) {
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
  }
  // set price of admission variable to 0
  let priceOfAdmission = 0
  // checks if ticket type & entrant type exist in ticket info, if so add corresponding price to price of admission
  if ((ticketInfo.ticketType === "general" || ticketInfo.ticketType === "membership") && (ticketInfo.entrantType === "child" || ticketInfo.entrantType === "adult" || ticketInfo.entrantType === "senior")) {
    priceOfAdmission += ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType];
  }
  // used object destructuring to extract the extras object from ticketData
  const { extras } = ticketData
  // loop through each extra in ticketInfo
  for (const extra of ticketInfo.extras) {
    // checks if extra exists in the extras object
    if (extras[extra]) {
      // if so, get price of the extra for given entrant type
      const extraPrice = extras[extra].priceInCents[ticketInfo.entrantType]
      // if extra has a price, add it to price of admission
      if (extraPrice) {
        priceOfAdmission += extraPrice
      }
      // if extra does not exist, return ticket extras error
    } else if (!(ticketInfo.extras.includes("movie")) && !(ticketInfo.extras.includes("education")) && !(ticketInfo.extras.includes("terrace"))) {
      return `Extra type '${ticketInfo.extras}' cannot be found.`
    }
  }
  // return final price of admission
  return priceOfAdmission
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
  // assign variables to ticket and entrant types
  const ticketTypes = ["general", "membership"];
  const entrantTypes = ["child", "adult", "senior"];
  // loop and validate each purchase in array of purchases
  for (const purchase of purchases) {
    if (!ticketTypes.includes(purchase.ticketType)) {
      // if ticket type is invalid, return error message
      return `Ticket type '${purchase.ticketType}' cannot be found.`;
    }
    if (!entrantTypes.includes(purchase.entrantType)) {
      // if entrant type is invalid, return error message
      return `Entrant type '${purchase.entrantType}' cannot be found.`;
    }
    for (const extra of purchase.extras) {
      // loop thru existing extras 
      if (!ticketData.extras[extra]) {
        // if extra type is invalid, return error message
        return `Extra type '${extra}' cannot be found.`;
      }
    }
  }
  // assign variables for total amount and ticket receipt
  let totalAmount = 0;
  let ticketReceipt = "";
  // loop thru each purchase in array of purchases
  for (const purchase of purchases) {
    // assign variable to cost of each ticket using past function, then add amount to total amount
    const amount = calculateTicketPrice(ticketData, purchase);
    totalAmount += amount;
    // create ticket variable with string of ticket type, entrant type and admission price
    let ticket = `${purchase.entrantType.charAt(0).toUpperCase() + purchase.entrantType.slice(1)} ${purchase.ticketType.charAt(0).toUpperCase() + purchase.ticketType.slice(1)} Admission: $${(amount / 100).toFixed(2)}`;
    // if there are extras, create a string using map method to pull extra descriptions or return empty string
    let extras = purchase.extras.length > 0 ? " (" + purchase.extras.map(extra => ticketData.extras[extra].description).join(", ") + ")" : "";
    // add extras to ticket string, if next ticket receipt empty string, return empty string or new line for next ticket receipt
    ticketReceipt += (ticketReceipt === "" ? "" : `\n`) + ticket + extras;
  }
  // assign variable to dino museum thank you part of receipt
  const dinoReceipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
  // assign variable to end of receipt showing total amount divided by 100 to convert dollar amount and then add 2 decimal places
  const receiptAmt = `\n-------------------------------------------\nTOTAL: $${(totalAmount / 100).toFixed(2)}`;
  //  return concatenated strings as total receipt
  return dinoReceipt + ticketReceipt + receiptAmt;
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
