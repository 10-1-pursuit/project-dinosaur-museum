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
  if (!(ticketInfo.ticketType === "general") && !(ticketInfo.ticketType === "membership")) {
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`
  } else if (!(ticketInfo.entrantType === "child") && !(ticketInfo.entrantType === "adult") && !(ticketInfo.entrantType === "senior")) {
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`
  }
  let priceOfAdmission = 0
  if ((ticketInfo.ticketType === "general") && (ticketInfo.entrantType === "child")) {
    const genChild = priceOfAdmission += 2000
  } else if ((ticketInfo.ticketType === "general") && (ticketInfo.entrantType === "adult")) {
    const genAdult = priceOfAdmission += 3000
  } else if ((ticketInfo.ticketType === "general") && (ticketInfo.entrantType === "senior")) {
    const genSenior = priceOfAdmission += 2500
  }
  if ((ticketInfo.ticketType === "membership") && (ticketInfo.entrantType === "child")) {
    const memberChild = priceOfAdmission += 1500
  } else if ((ticketInfo.ticketType === "membership") && (ticketInfo.entrantType === "adult")) {
    const memberAdult = priceOfAdmission += 2800
  } else if ((ticketInfo.ticketType === "membership") && (ticketInfo.entrantType === "senior")) {
    const memberSenior = priceOfAdmission += 2300
  }
  for (const extra of ticketInfo.extras) {
    if (extra === "movie" && ticketInfo.ticketType === "general") {
      priceOfAdmission += 1000
    } else if (extra === "education" && ticketInfo.ticketType === "general") {
      if (ticketInfo.entrantType === "child") priceOfAdmission += 1000
      if (ticketInfo.entrantType === "adult") priceOfAdmission += 1200
      if (ticketInfo.entrantType === "senior") priceOfAdmission += 1200
    } else if (extra === "terrace" && ticketInfo.ticketType === "general") {
      if (ticketInfo.entrantType === "child") priceOfAdmission += 500
      if (ticketInfo.entrantType === "adult") priceOfAdmission += 1000
      if (ticketInfo.entrantType === "senior") priceOfAdmission += 1000
    } else if (extra === "movie" && ticketInfo.ticketType === "membership") {
      priceOfAdmission += 1000
    } else if (extra === "education" && ticketInfo.ticketType === "membership") {
      if (ticketInfo.entrantType === "child") priceOfAdmission += 1000
      if (ticketInfo.entrantType === "adult") priceOfAdmission += 1200
      if (ticketInfo.entrantType === "senior") priceOfAdmission += 1200
    } else if (extra === "terrace" && ticketInfo.ticketType === "membership") {
      if (ticketInfo.entrantType === "child") priceOfAdmission += 500
      if (ticketInfo.entrantType === "adult") priceOfAdmission += 1000
      if (ticketInfo.entrantType === "senior") priceOfAdmission += 1000
    } else if (!(ticketInfo.extras.includes("movie")) && !(ticketInfo.extras.includes("education")) && !(ticketInfo.extras.includes("terrace"))) {
      return `Extra type '${ticketInfo.extras}' cannot be found.`
    }
  }
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
  const ticketTypes = ["general", "membership"];
  const entrantTypes = ["child", "adult", "senior"];

  for (const purchase of purchases) {
    if (!ticketTypes.includes(purchase.ticketType)) {
      return `Ticket type '${purchase.ticketType}' cannot be found.`;
    }
    if (!entrantTypes.includes(purchase.entrantType)) {
      return `Entrant type '${purchase.entrantType}' cannot be found.`;
    }
    for (const extra of purchase.extras) {
      if (!ticketData.extras[extra]) {
        return `Extra type '${extra}' cannot be found.`;
      }
    }
  }

  let totalAmount = 0;
  let ticketReceipt = "";

  for (const purchase of purchases) {
    const amount = calculateTicketPrice(ticketData, purchase);
    totalAmount += amount;
    let ticket = `${purchase.entrantType.charAt(0).toUpperCase() + purchase.entrantType.slice(1)} ${purchase.ticketType.charAt(0).toUpperCase() + purchase.ticketType.slice(1)} Admission: $${(amount / 100).toFixed(2)}`;
    let extras = purchase.extras.length > 0 ? " (" + purchase.extras.map(extra => ticketData.extras[extra].description).join(", ") + ")" : "";
    ticketReceipt += (ticketReceipt === "" ? "" : `\n`) + ticket + extras;
  }

  const dinoReceipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
  const receiptAmt = `\n-------------------------------------------\nTOTAL: $${(totalAmount / 100).toFixed(2)}`;

  return dinoReceipt + ticketReceipt + receiptAmt;
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
