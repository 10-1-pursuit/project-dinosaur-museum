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
 * * EXAMPLE:
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
  let price = 0;
  if (capitalizeFirstLetter(ticketInfo.entrantType) !== "Child" && capitalizeFirstLetter(ticketInfo.entrantType) !== "Adult" && capitalizeFirstLetter(ticketInfo.entrantType) !== "Senior") {
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
  }
  switch (capitalizeFirstLetter(ticketInfo.ticketType)) {
    case "General":
      price = ticketData.general.priceInCents[ticketInfo.entrantType];
      break;
    case "Membership":
      price = ticketData.membership.priceInCents[ticketInfo.entrantType]
      break;
    default:
      return `Ticket type '${ticketInfo.ticketType}' cannot be found.`;
  }
  if (!(ticketInfo.extras === undefined || ticketInfo.extras.length === 0)
    && !(ticketInfo.extras.includes("movie") || ticketInfo.extras.includes("education") || ticketInfo.extras.includes("terrace"))) {
    return `Extra type '${ticketInfo.extras[0]}' cannot be found.`;
  }
  if (ticketInfo.extras.includes("movie")) {
    price += ticketData.extras.movie.priceInCents[ticketInfo.entrantType];
  } if (ticketInfo.extras.includes("education")) {
    price += ticketData.extras.education.priceInCents[ticketInfo.entrantType];
  } if (ticketInfo.extras.includes("terrace")) {
    price += ticketData.extras.terrace.priceInCents[ticketInfo.entrantType];
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
  let statement = "";
  const receipt = [];
  let total = 0;
  for (let purchase of purchases) {
    if (calculateTicketPrice(ticketData, purchase) === `Ticket type '${purchase.ticketType}' cannot be found.`) {
      return `Ticket type '${purchase.ticketType}' cannot be found.`;
    }
    if (calculateTicketPrice(ticketData, purchase) === `Entrant type '${purchase.entrantType}' cannot be found.`) {
      return `Entrant type '${purchase.entrantType}' cannot be found.`;
    }
    if (calculateTicketPrice(ticketData, purchase) === `Extra type '${purchase.extras[0]}' cannot be found.`) {
      return `Extra type '${purchase.extras[0]}' cannot be found.`;
    }
    receipt.push(`${capitalizeFirstLetter(purchase.entrantType)} ${capitalizeFirstLetter(purchase.ticketType)} Admission: $${centsToDollars(calculateTicketPrice(ticketData, purchase))}`)
    total += calculateTicketPrice(ticketData, purchase);
    if (purchase.extras !== undefined && purchase.extras.length !== 0) {
      let extras = [];
      for (let extra of purchase.extras) {
        extras.push(`${capitalizeFirstLetter(extra)} Access`)
      }
      receipt[receipt.length - 1] = receipt[receipt.length - 1] + ` (${extras.join(", ")})`;
    }
  }
  return `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n${receipt.join('\n')}\n-------------------------------------------\nTOTAL: $${centsToDollars(total)}`
}

/** 
 * captilizeFirstLetter()
 * ---------------------
 * Helper function that returns a string with only the first letter capitalized.
 * 
 * @param {String} str - Any string.
 * @return {String} A string where only the first character is uppercase.
*/ 
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

/**
 * centsToDollars()
 * ---------------------
 * Helper function that returns a price number with two decimal places.
 * @param {number} priceInCents - the cost in cents.
 * @returns - a number with two decimal places.
 */
const centsToDollars = (priceInCents) => Math.round(priceInCents/100).toFixed(2);

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};