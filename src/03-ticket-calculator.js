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
  const { ticketType, entrantType, extras = [] } = ticketInfo;

  if (!ticketData[ticketType]) {
    throw new Error(`Ticket type '${ticketType}' cannot be found.`);
  }

  if (!ticketData[ticketType].priceInCents[entrantType]) {
    throw new Error(`Entrant type '${entrantType}' cannot be found.`);
  }

  for (let i = 0; i < extras.length; i++) {
    const extraType = extras[i];
    if (!ticketData.extras[extraType]) {
      throw new Error(`Extra type '${extraType}' cannot be found.`);
    }
  }

  let totalCost = ticketData[ticketType].priceInCents[entrantType];

  for (let i = 0; i < extras.length; i++) {
    const extraType = extras[i];
    totalCost += ticketData.extras[extraType].priceInCents[entrantType];
  }

  return totalCost;
}

// The function calculateTicketPrice is defined with two parameters `ticketData` and `ticketInfo`.
// Two constants `ticketType` and `entrantType` are initialized using the `ticketInfo` object.
// An error is thrown if the `ticketType` is not found in the `ticketData` object. The error message states that the ticket type cannot be found.
// An error is thrown if the `entrantType` is not found in the `ticketData` object. The error message states that the entrant type cannot be found.
// An empty array is assigned to the extras constant if the extras array is not provided in the `ticketInfo` object.
// The `totalPriceInCents` variable is initialized with the ticket price in cents for the given ticket type and entrant type.
// A for loop iterates over each extra in the extras array.
// An error is thrown if the extra type is not found in the `ticketData.extras` object. The error message states that the extra type cannot be found.
// The price in cents for the given entrant type is added to the `totalPriceInCents` for each extra found in the `ticketData.extras` object.
// The `totalPriceInCents` is returned by the function.

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
function purchaseTickets(ticketData, purchases, ticketType) {
  // Initialize a variable named `totalCost` to keep track of the total cost of all purchased tickets
  let totalCost = 0;
  // Initialize a variable named `receipt` to store a message that will be returned later
  let receipt = "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n";

  // Loop through each purchase in the `purchases` array
  for (let purchase of purchases) {
    // Extract the `ticketType`, `entrantType`, and `extras` properties from the current `purchase` object
    const ticketType = purchase.ticketType;
    const entrantType = purchase.entrantType;
    const extras = purchase.extras || [];

    // Retrieve the ticket and entrant type information from the `ticketData` object
    const ticketTypeInfo = ticketData[ticketType];
    // If the ticket type is not found in the `ticketData` object, return an error message
    if (!ticketTypeInfo) {
      return `Ticket type '${ticketType}' cannot be found.`;
    }
    const entrantTypeInfo = ticketTypeInfo.prices[entrantType];
    // If the entrant type is not found for the given ticket type, return an error message
    if (!entrantTypeInfo) {
      return `Entrant type '${entrantType}' cannot be found for ticket type '${ticketType}'.`;
    }

    // Calculate the total cost of the current ticket by adding the base ticket price and any extra costs
    const ticketPrice = entrantTypeInfo.price + extras.reduce((acc, extra) => {
      // Retrieve the price of the current extra from the `ticketData` object
      const extraPrice = ticketData.extras[extra];
      // If the extra is not found in the `ticketData` object, throw an error
      if (!extraPrice) {
        throw new Error(`Extra '${extra}' cannot be found.`);
      }
      // Add the extra price to the accumulator
      return acc + extraPrice;
    }, 0);

    // Add the ticket price to the total cost
    totalCost += ticketPrice;
    // Add a line to the `receipt` variable detailing the purchased ticket
    receipt += `${entrantType.charAt(0).toUpperCase()}${entrantType.slice(1)} ${ticketType.charAt(0).toUpperCase()}${ticketType.slice(1)} Admission: $${ticketPrice.toFixed(2)} (${extras.map(extra => extra.charAt(0).toUpperCase() + extra.slice(1) + " Access").join(", ")})\n`;
  }

  // Add a final line to the `receipt` variable with the total cost
  receipt += `-------------------------------------------\nTOTAL: $${totalCost.toFixed(2)}\n`;
  // Return the `receipt` variable as the result of the function
  return receipt;
}

// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
