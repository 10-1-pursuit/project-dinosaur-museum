/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const exampleTicketData = require('../data/tickets');
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

// Plan:

// Goal: Returns the ticket price based on the ticket information supplied to the function.

// If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.

// Steps:
// 1. Write guard clauses for all the edge cases of incorrect or not included ticket types (i.e. general or membership), entrant type, or extras.
// 2. Create a variable `totalTicketPrice` to be the `accumulator` for the total.
// 3. Based on the ticket info and the criteria in the `tickets` object, use the `accumulator pattern` to come up with the total and store it in `totalTicketPrice`.
// 4. Return the final total.

function calculateTicketPrice(ticketData, ticketInfo) {
	// Guard clauses: If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
	if (
		!ticketData[ticketInfo.ticketType] ||
		ticketInfo.ticketType === 'extras'
	) {
		return `Ticket type '${ticketInfo.ticketType}' cannot be found.`;
	} else if (
		!ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]
	) {
		return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
	} else {
		for (let extra of ticketInfo.extras) {
			if (!ticketData.extras[extra]) {
				return `Extra type '${extra}' cannot be found.`;
			}
		}
	}

	// Set the `accumulator`
	let totalTicketPrice = 0;

	// Use the `accumulator pattern` to get a sub-total based on `ticketType` and `entrantType`.
	totalTicketPrice +=
		ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType];

	// Use a `for...of` loop to loop through `ticketInfo.extras` array and adjust the total accordingly, using the accessing structure of `ticketData` and dynamically plugging in the `extras` string for the key if any to the total.
	for (let extra of ticketInfo.extras) {
		totalTicketPrice +=
			ticketData.extras[extra].priceInCents[ticketInfo.entrantType];
	}

	return totalTicketPrice;
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

// Plan:

// Goal: Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.

/* 
Ideas:

Since I already created a `calculateTicketPrice()` function that returns a value for one ticket
(object), then I can create another higher order helper function that iterates over the inputted `purchases` array of `ticket` objects and then I can call this `calculateTicketPrice()` function on each element (each `ticket` object, originally `ticketInfo`). I might have to refactor and customize said callback function, but I can def use the concepts and solutions from the original. I can then use the `accumulator pattern` of each of these results and accumulate them into a total (maybe use `.reduce()`). Finally, return the properly formatted string as the assignment requires. 

*/

// Steps:
// 1. 
// 2.

// Helper Higher Order Function: Calculate the total ticket price for a group.
function calculateGroupTicketPrice(ticketData, purchases) {
	// Each ticket from `purchases` array.

  purchases.forEach((purchase) => )
  
  // Guard clauses: If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
	if (
		!ticketData[ticketInfo.ticketType] ||
		ticketInfo.ticketType === 'extras'
	) {
		return `Ticket type '${ticketInfo.ticketType}' cannot be found.`;
	} else if (
		!ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType]
	) {
		return `Entrant type '${ticketInfo.entrantType}' cannot be found.`;
	} else {
		for (let extra of ticketInfo.extras) {
			if (!ticketData.extras[extra]) {
				return `Extra type '${extra}' cannot be found.`;
			}
		}
	}

	// Set the `accumulator`
	let totalTicketPrice = 0;

	// Use the `accumulator pattern` to get a sub-total based on `ticketType` and `entrantType`.
	totalTicketPrice +=
		ticketData[ticketInfo.ticketType].priceInCents[ticketInfo.entrantType];

	// Use a `for...of` loop to loop through `ticketInfo.extras` array and adjust the total accordingly, using the accessing structure of `ticketData` and dynamically plugging in the `extras` string for the key if any to the total.
	for (let extra of ticketInfo.extras) {
		totalTicketPrice +=
			ticketData.extras[extra].priceInCents[ticketInfo.entrantType];
	}

	return totalTicketPrice;
}

function purchaseTickets(ticketData, purchases) {
	const ticketInfo = purchases.forEach();
	let receipt = `Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\n`;
	let receipt2 = `\n-------------------------------------------\nTOTAL: $${
		// Use helper function defined above to calculate group price based on `purchases` array.
		(calculateGroupTicketPrice(ticketData, ticketInfo) / 100).toFixed(2)
	}`;
	let finalResult = '';
	let body = '';
	for (let i = 0; i < purchases.length; i++) {
		for (let j = 0; j < purchases[i].extras.length; j++) {
			let extFrills = purchases[i].extras[j];
			//console.log(extFrills)
		}
		body +=
			purchases[i].entrantType[0].toUpperCase() +
			purchases[i].entrantType.slice(1).toLowerCase() +
			' ' +
			tickets[purchases[i].ticketType].description +
			`: $${(calculateGroupTicketPrice(ticketData, ticketInfo) / 100).toFixed(
				2
			)}` +
			' ' +
			`(${tickets.extras[purchases[i].extras[0]]})`;
	}
	finalResult = receipt + body + receipt2;
	return finalResult;
}

// const purchases = [
// 	{
// 		ticketType: 'general',
// 		entrantType: 'adult',
// 		extras: ['movie', 'terrace'],
// 	},
// 	{
// 		ticketType: 'general',
// 		entrantType: 'senior',
// 		extras: ['terrace'],
// 	},
// 	{
// 		ticketType: 'general',
// 		entrantType: 'child',
// 		extras: ['education', 'movie', 'terrace'],
// 	},
// 	{
// 		ticketType: 'general',
// 		entrantType: 'child',
// 		extras: ['education', 'movie', 'terrace'],
// 	},
// ];

const purchases = [
	{
		ticketType: 'general',
		entrantType: 'adult',
		extras: ['movie', 'terrace'],
	},
	{
		ticketType: 'general',
		entrantType: 'senior',
		extras: ['terrace'],
	},
	{
		ticketType: 'general',
		entrantType: 'child',
		extras: ['education', 'movie', 'terrace'],
	},
	{
		ticketType: 'general',
		entrantType: 'child',
		extras: ['education', 'movie', 'terrace'],
	},
];

console.log(purchaseTickets(exampleTicketData, purchases));
// Do not change anything below this line.
module.exports = {
	calculateTicketPrice,
	purchaseTickets,
};
