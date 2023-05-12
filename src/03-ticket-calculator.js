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
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. 
 * See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, 
 * or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
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
  let ticketPrice = 0; // Create a variable to store ticketprice later

  if (!ticketData[ticketInfo.ticketType]) { // checks if [ticketInfo.ticketType] is INSIDE ticketData, ! is the not operator that checks
    return `Ticket type '${ticketInfo.ticketType}' cannot be found.`; // return this error message if THERE ARE NO "MATCHES" from ticketType and ticketData
  }

  if (!ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]) { // ticketData[ticketInfo.ticketType] gets value associated with the [ticketInfo.ticketType] key in ticketData .priceInCents accesses the priceInCents in ticketInfo.ticketType and then checks if [ticketInfo.entrantType] exists in priceInCents
    return `Entrant type '${ticketInfo.entrantType}' cannot be found.`; // the bang operator is checking if [ticketInfo.ticketType][ticketInfo.entrantType] does not exist in ticketData if it is true then return this error message
  }

  ticketPrice = ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType] // assign ticketPrice to value gotten from ticketData based on [ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]
  // .priceInCents uses [ticketInfo.entrantType] as a key to access the entrant type inside priceInCents to account for entrant.priceInCents
  for (const extra of ticketInfo.extras) { // for of loop to get access to extra      // ticketData[ticketInfo.ticketType].priceInCents uses the KEY [ticketInfo.ticketType] to access ticketDatas.priceInCents 
    if (!ticketData.extras[extra]) { // checks if extra "gotten from ticketInfo" exists inside ticketData/extras
      return `Extra type '${extra}' cannot be found.`; // if not found return the error message and the bang operator dodes the same thing as the previous if statements
    }
    ticketPrice += ticketData.extras[extra].priceInCents[ticketInfo.entrantType]; // go into ticketDats extras object and see if extra from ticketinfo.extras exists, then go into priceInCents if an extra value exists use
  }                                                                               //[ticketInfo.entrantType] as keys to access it in priceInCents. += adds up the total cost from extras and ticketData
  return ticketPrice;
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
  let receiptHeadLine = "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n"; //Top of receipt
  let receiptEndAndTotal = "-------------------------------------------\nTOTAL:"; // bottom of receipt
  let receiptResult = receiptHeadLine; //create variable and set it to receiptHeadLine

  for (const purchase of purchases) {
    const purchaseTicket = purchase.ticketType; // create variable and set it to ticketType inside of the purchases loop
    const purchaseEntrant = purchase.entrantType; // create variable and set it to entrantType inside of the purchases loop
    const purchaseExtras = purchase.extras; // create variable and set it to extras inside of the purchases loop
    const ticketPrice = calculateTicketPrice(ticketData, purchase); // create variable and set it to the previous inside of the purchases loop

    if (typeof ticketPrice === "string") { // typeof returns a string indicating the type of value i.e typeof ticketPrice checks
      return ticketPrice; // returns the errors from the previous function because of calculateTicketPrice(ticketData, purchase)
    }

    const ticketDescription = ticketData[purchaseTicket].description; // grabs the description in ticketData using purchaseTicket and set it to the variable. Output : Membership Admission
    let extrasDescription = []; // set extrasDescription to empty array because we need to get the objects inside description out from extras and store them
    if (Array.isArray(purchaseExtras)) { // checks if purchaseExtras is an array, if it is true then move onto the next line
      extrasDescription = purchaseExtras.map((extra) => ticketData.extras[extra].description); // extraDescription contains the matching description from purchaseExtras and ticketData.extras. [extra] is used to access the description. Map method using fat arrow function to iterate over purchaseExtras and see if theres matching descriptions with ticketData.extras and creates a new array with the same length. The array has descriptions of each ticket.extras that matches purchaseExtra
    }
    const formatExtraDescription = extrasDescription.join(", "); // join adds a comma and space for each element in extrasDescription
    const ticketLine = `${purchaseEntrant.charAt(0).toUpperCase() + purchaseEntrant.slice(1)} ${ticketDescription}: $${(ticketPrice / 100).toFixed(2)}`; // charAt goes to the first letter of purchaseEntrant string and toUpperCase applies an uppercase to it. .slice(1) method grabs a portion of the string that starts on index 1 and til the end which removes the first letter. + operator combines the uppercased first letter along with the index 1 to the end portion of purchaseEntrant. ticketPrice / 100 converts cents to dollars and .toFixed(2) is put afterwards to get two decimal places that represent cents i.e ().00)
    let extrasLine = ''; // set extrasLine to empty string
    if (formatExtraDescription) { // if formatExtraDescription has extras, (which has the new array created)
      extrasLine = ` (${formatExtraDescription})`; // set extrasLine with a space and parentheses along with formatExtraDescription being inside i.e Adult Membership Admission: $48.00(this is where the space is added in the string interpolation) (Movie Access, Terrace Access)
    }
    receiptResult += `${ticketLine}${extrasLine}\n`; // Add ${ticketLine}${extrasLine} to receiptResult along with putting a new line with \n

  }
  const totalSum = purchases.reduce((total, purchase) => total + calculateTicketPrice(ticketData, purchase), 0) // reduce accumulates the total sum on purchases by calling calculateTicketPrice for each purchase and the 0 is to set totalSum to it without having to declare a variable earlier on the function. TotalSum is then set to the total sum of purchases
  receiptResult += `${receiptEndAndTotal} $${(totalSum / 100).toFixed(2)}` // Add ${receiptEndAndTotal} and the space after TOTAL: along with a dollarsign and the total price representing .00
  return receiptResult
}


// Do not change anything below this line.
module.exports = {
  calculateTicketPrice,
  purchaseTickets,
};
