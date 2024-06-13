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

/*
### 1: `maleCount`
 - **Objective**: Find the number of male customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `filter`
*/
var maleCount = function (array) {
  let males = _.filter(array, (customer) => customer.gender === "male");
  return males.length;
};

/*
### 2: `femaleCount`
 - **Objective**: Find the number of female customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**: use `reduce`
*/
var femaleCount = function (array) {
  let females = _.reduce(
    array,
    (acc, current) => {
      if (current.gender === "female") {
        return acc + 1;
      } else {
        return acc;
      }
    },
    0
  );
  return females;
};

/*
### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
*/

var oldestCustomer = function (array) {
  var oldest = _.reduce(array, function (acc, current) {
    if (current.age > acc.age) {
      return current;
    } else {
      return acc;
    }
  });
  return oldest.name;
};

/*
### 4: `youngestCustomer`
 - **Objective**: Find the youngest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
*/

var youngestCustomer = function (array) {
  var youngest = _.reduce(array, function (acc, current) {
    if (current.age < acc.age) {
      return current;
    } else {
      return acc;
    }
  });
  return youngest.name;
};
/*
### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:

*/

var averageBalance = function (array) {};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount = function (array) {
  let ouput = _.reduce(
    array,
    (acc, current) => {
      if (acc[current.gender]) {
        acc[current.gender]++;
      } else {
        acc[current.gender] = 1;
      }
      return acc;
    },
    {}
  );
  return ouput;
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
