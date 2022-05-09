// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("capitalizerArr", () => {
  it("takes in a mixed array and returns an array with a sentence about each person with their name capitalized and their occupation", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(capitalizerArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

//PSEUDOCODE
// take an array in a function
// map over each value to split all of people.names
// separates new strings in newly mapped array
// capitalize the first character and concat the remaining characters
// concat the two names into a variable

const capitalizerArr = (arr) => {
  return arr.map((value) => {
  let splitArr = value.name.split(' ')
  let capArr = splitArr[0][0].toUpperCase() + splitArr[0].substring(1) + " " + splitArr[1][0].toUpperCase() + splitArr[1].substring(1)
  return `${capArr} is ${value.occupation}.`  
})
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("divThreeRemainder",() => {
  it("divides all numbers in an array by 3 and returns the remainder",() => {
      expect(divThreeRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])        
      expect(divThreeRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])        
  })  
})


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

//PSEUDOCODE
//create function that takes array 
// filter array for numbers only
// map over filtered array and return remainder of value / 3. 



const divThreeRemainder = (arr) => {
  let a = arr.filter(v => typeof v === 'number')
  return a.map(v => v%3)
}



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubert",() => {
  it("cubes and sums all numbers in array",() => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
      expect(cubert(cubeAndSum1)).toEqual(99)        
      expect(cubert(cubeAndSum2)).toEqual(1125)        
  })  
})


// b) Create the function that makes the test pass.


//PSEUDOCODE
//take an array
// map the array and multiple each value to the power of 3 
// loop over the length of the array adding each value to the next value to get the sum

const cubert = (arr) => {
  let sum = 0
  let cubed = arr.map(v => v ** 3)
  for(let i = 0; i < cubed.length; i++) {
      sum += cubed[i]
      }
  return sum
  }


//   PASS  ./code-challenges.test.js
//   capitalizerArr
//     √ takes in a mixed array and returns an array with a sentence about each person with their name capitalized and their occupation (2 ms)
//   divThreeRemainder
//     √ divides all numbers in an array by 3 and returns the remainder
//   cubert
//     √ cubes and sums all numbers in array

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.539 s, estimated 1 s
// Ran all test suites.
// Done in 1.50s.
