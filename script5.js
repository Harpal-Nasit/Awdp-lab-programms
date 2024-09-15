// Declaring variables with different data types
let number = 10;             // Number
let text = "Hello, js!";  // String
let isTrue = true;           // Boolean
let person = {               // Object
    name: "Joe",
    age: 30
};
let numbersArray = [1, 2, 3, 4, 5]; // Array

// Accessing the output div
const outputDiv = document.getElementById('output');

// Print number and text to the webpage
outputDiv.innerHTML += `<p><u><b>Data types:</p>`;
outputDiv.innerHTML += `<p>Number: ${number}</p>`;
outputDiv.innerHTML += `<p>Text:   ${text}</p>`;
outputDiv.innerHTML += `<p>Object (person): ${JSON.stringify(person, null, 2)}</p>`;
outputDiv.innerHTML += `<p>Array: ${numbersArray}</p><br>`;




// Conditional statement example
outputDiv.innerHTML += `<p><u><b>Conditinal statement:</p>`;
if (number > 5) {
    outputDiv.innerHTML += `<p>The number ${number} is greater than 5.</p><br>`;
} else {
    outputDiv.innerHTML += `<p>The number ${number} is 5 or less.</p><br>`;
}

// Simple for loop to iterate over an array and print each element
outputDiv.innerHTML += `<p><u><b>Looping through numbersArray:</p>`;
for (let i = 0; i < numbersArray.length; i++) {
    outputDiv.innerHTML += `<p>Number at index ${i} is ${numbersArray[i]}</p>`;
}


// Loop example: While loop to sum numbers
let sum = 0;
let index = 0;
while (index < numbersArray.length) {
    sum += numbersArray[index];
    index++;
}
outputDiv.innerHTML += `<br><p><u><b>While loop throgh:</p>`;
outputDiv.innerHTML += `<p>Sum of numbers in array is ${sum}</p><br>`;

// Loop example: For...of loop to iterate over an array
outputDiv.innerHTML += `<p><b><u>Using for...of loop to display array elements:</p>`;
for (let number of numbersArray) {
    outputDiv.innerHTML += `<p>Array element: ${number}</p>`;
}

// Object property access and conditional
outputDiv.innerHTML += `<br><p><b><u>Object property access and conditional:</p>`;

if (person.age > 25) {
    outputDiv.innerHTML += `<p>${person.name} is older than 25 years.</p>`;
} else {
    outputDiv.innerHTML += `<p>${person.name} is 25 years old or younger.</p>`;
}