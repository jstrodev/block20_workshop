/*    Pseudo Code

// Generate references for input, button, and output elements using getElementById and querySelector methods

// Declare an array named numbers to store user input

// When the user clicks "Add Number" button
 - Prevent form submission 
 - Get the value from the input field
  - IF the value is a number
    - Add the number to the numbers array
  - Update the Number Bank
  - Clear the input field

// When the user clicks the Sort 1 button
  - IF there are numbers in the numbers array
   - Remove the first number from the numbers array
   - IF the number is even
      - Add the number to the Evens display
   - ELSE 
      - Add the number to the Odds display
   - Update the Number Bank to reflect the new numbers array

// When the user clicks the Sort All button
  - WHILE the numbers array is not empty
   - Remove the first number from the numbers array
  - IF the number is even
     - add all numbers to the Evens display
  - ELSE 
     - Add all numbers to the Odds display
  - Update the number Bank
*/

// Methods to select elements within HTML enabling the manipulation of the DOM tree nodes
const numberInput = document.querySelector('input[name="number"]');
const addNumberButton = document.querySelector('form button');
const numberBankOutput = document.querySelector('#numberBank output');
const oddsOutput = document.getElementById('odds').querySelector('output');
const evensOutput = document.getElementById('evens').querySelector('output');
const sortOneButton = document.getElementById('sortOne');
const sortAllButton = document.getElementById('sortAll');

// Setting up initial state by declaring an array to store numbers entered by users in the number bank 
let numbers = []; 

// Event Listeners

// Event Listener for when user clicks on the add number button
addNumberButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  const number = Number(numberInput.value); // Converts input value to a number
    if (!isNaN(number)) { // Check if input is a valid number using falsy value
    numbers.push(number); // Adds to number array if a valid number
    updateNumberBank(); // Invokes the function to update the number bank display with the numbers array
    numberInput.value = ''; // Clears the input field after add number button is clicked
    }
});

// Event Listener for when a user clicks on the sort one button
sortOneButton.addEventListener('click', () => {
   if (numbers.length > 0) { // Sets condition if the numbers array is greater than 0
     const number = numbers.shift(); // Remove first number from the number array
     classifyNumber(number); // Invokes function to classify the number and move to odd or even output
     updateNumberBank(); // Function is invoked within brackets to update the number bank display
   }
 });
 
 // Event Listener for when a user clicks on the sort all button
 sortAllButton.addEventListener('click', () => {
   while (numbers.length > 0) { // While loop is used because we don't know how many values a user will input. Condition stops when length is 0.
     const number = numbers.shift(); // Adds all numbers in the number bank to the number array 
     classifyNumber(number); // Sorts numbers to even or odd display if while condition is met
   }
   updateNumberBank(); // Function is invoked outside of while loop to update the number bank
 });
 
 // Functions
 const updateNumberBank = () => {
   numberBankOutput.textContent = numbers.join(', ');
 }
 
 const classifyNumber = (number) => {
   if (number % 2 === 0) {
     evensOutput.textContent += `${number}, `; // Adds even number to evens output followed by a comma
   } else {
     oddsOutput.textContent += `${number}, `; // Adds odd number to evens output followed by a comma
   }
 }
 
 render();