// #!/usr/bin/env node

"use strict";

var customers = require("./data/customers.json");
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
  // Use lodash's filter function to get an array of male customers
  let males = _.filter(array, (customer) => customer.gender === "male");
  // Return the length of the filtered array, which is the count of males
  return males.length;
};

var femaleCount = function (array) {
  // Use reduce method to iterate over the array and count females
  let females = _.reduce(
    array,
    (acc, current) => {
      // Check if the current customer's gender is "female"
      if (current.gender === "female") {
        // If female, increment the accumulator by 1
        return acc + 1;
      } else {
        // If not female, return the accumulator unchanged
        return acc;
      }
    },
    0 // Initial value of the accumulator is 0
  );
  // Return the total count of females
  return females;
};

var oldestCustomer = function (array) {
  // Use reduce method to iterate over the array and find the oldest customer
  var oldest = _.reduce(array, function (acc, current) {
    // Check if the current customer's age is greater than the accumulator's age
    if (current.age > acc.age) {
      // If current customer is older, return the current customer
      return current;
    } else {
      // If accumulator is older, return the accumulator unchanged
      return acc;
    }
  });
  // Return the name of the oldest customer
  return oldest.name;
};

var youngestCustomer = function (array) {
  // Use reduce method to iterate over the array and find the youngest customer
  var youngest = _.reduce(array, function (acc, current) {
    // Check if the current customer's age is less than the accumulator's age
    if (current.age < acc.age) {
      // If current customer is younger, return the current customer
      return current;
    } else {
      // If accumulator is younger, return the accumulator unchanged
      return acc;
    }
  });
  // Return the name of the youngest customer
  return youngest.name;
};

var averageBalance = function (array) {
  // Use lodash's reduce function to sum up all balances
  let total = _.reduce(
    array,
    (acc, current) => {
      // Convert balance string to number and add to accumulator
      return acc + parseFloat(current.balance.replace(/[$,]/g, ""));
    },
    0 // Initial value of the accumulator
  );
  // Calculate the average by dividing the total by the number of customers
  let average = total / array.length;
  // Return the calculated average
  return average;
};

var firstLetterCount = function (array, letter) {
  // Convert the input letter to lowercase for case-insensitive comparison
  const lowerCaseLetter = letter.toLowerCase();
  // Use reduce method to iterate over the array and count names starting with the given letter
  const count = array.reduce((acc, current) => {
    // Convert the first letter of the current's name to lowercase
    const firstLetter = current.name.charAt(0).toLowerCase();
    // Check if the first letter matches the input letter
    if (firstLetter === lowerCaseLetter) {
      // If it matches, increment the accumulator
      return acc + 1;
    }
    // If it doesn't match, return the accumulator unchanged
    return acc;
  }, 0); // Initial value of the accumulator is 0
  // Return the final count
  return count;
};

var friendFirstLetterCount = function (array, customerName, letter) {
  // Convert the input letter to lowercase for case-insensitive comparison
  const lowerCaseLetter = letter.toLowerCase();
  // Find the customer by name
  const customer = array.find((c) => c.name === customerName);
  // If the customer is not found, return 0
  if (!customer) {
    return 0;
  }
  const count = customer.friends.reduce((acc, friend) => {
    // Convert the first letter of the friend's name to lowercase
    const firstLetter = friend.name.charAt(0).toLowerCase();
    // Check if the first letter matches the input letter
    if (firstLetter === lowerCaseLetter) {
      // If it matches, increment the accumulator
      return acc + 1;
    }
    // If it doesn't match, return the accumulator unchanged
    return acc;
  }, 0); // Initial value of the accumulator is 0
  // Return the final count
  return count;
};

var friendsCount = function (array, customerName) {
  // Initialize an array to hold the names of customers that are friends with the given customer
  let result = [];
  // Iterate over each customer in the array
  array.forEach((customer) => {
    // Iterate over each friend of the current customer
    customer.friends.forEach((friend) => {
      // Check if the friend's name matches the given customer's name
      if (friend.name === customerName) {
        // If a match is found, add the current customer's name to the result array
        result.push(customer.name);
      }
    });
  });
  // Return the result array
  return result;
};

var topThreeTags = function (array) {
  // Initialize an object to hold the count of each tag
  let tagCount = {};
  // Iterate over each customer in the array
  array.forEach((customer) => {
    // Iterate over each tag of the current customer
    customer.tags.forEach((tag) => {
      // If the tag is already in the tagCount object, increment its count
      if (tagCount[tag]) {
        tagCount[tag]++;
      } else {
        // If the tag is not in the tagCount object, initialize its count to 1
        tagCount[tag] = 1;
      }
    });
  });
  // Convert the tagCount object to an array of [tag, count] pairs
  let tagArray = Object.entries(tagCount);
  // Sort the array by count in descending order
  tagArray.sort((a, b) => b[1] - a[1]);
  // Extract the top three tags
  let topTags = tagArray.slice(0, 3).map((tag) => tag[0]);
  // Return the top three tags
  return topTags;
};

var genderCount = function (array) {
  // Use reduce method to iterate over the array and count each gender
  let output = _.reduce(
    array,
    (acc, current) => {
      // Check if the accumulator already has a key for the current customer's gender
      if (acc[current.gender]) {
        // If it does, increment the count for that gender
        acc[current.gender]++;
      } else {
        // If it doesn't, initialize the count for that gender to 1
        acc[current.gender] = 1;
      }
      // Return the updated accumulator
      return acc;
    },
    {} // Initial value of the accumulator is an empty object
  );
  // Return the final gender count object
  return output;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
