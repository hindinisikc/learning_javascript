learning javascript

notes


// math shi


// Takes one number and returns that number +7

// function add7() {
//     let number = prompt("give me any number and I'd add it by 7");
//     let add = parseInt(number) + parseInt(7)

//     alert(add)
// }

// add7()





// Takes two numbers and returns their product

// function multiply() {
//     const a = prompt("give me a number");
//     const b = prompt("another number");

//     const product = (a, b) => a * b;

//     alert(product(a, b) );

// }

// multiply();



// function capitalize() {
//     const text = prompt("Tell me how you feel");
//     alert(text.charAt(0).toUpperCase() + text.slice(1));
// }

// capitalize();

// function lastLetter() {
//     const text = prompt("Give me a word");
//     if(!text || text.length === 1) return;
//     alert(text.slice(-1));

// }

// lastLetter();


// let answer = parseInt(prompt("GAEWGAE")); 

// for (i = 1; i <= answer; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         alert("FizzBuzz"); 
//     } else if (i % 3 === 0) {
//         alert("Fizz");
//     } else if (i % 5 === 0) {
//         alert("Buzz");
//     } else {
//         alert(i);
//     }
// }


// ARRAY AND LOOPS

// let fruits = ["apple", "banana", "orange", "mango", "kiwi", "grape", "strawberry", "blueberry", "watermelon", "pineapple"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits.length);


// methods


const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random() * number);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.beginPath();
    ctx.fillStyle = `rgb(${random(255)},${random(255)},${random(255)})`;
    ctx.arc(
    random(canvas.width), 
    random(canvas.height), 
    random(50), 0, 2 * Math.PI);
    ctx.fill();
    }
}

btn.addEventListener("click", draw);

// The provided JavaScript code defines a function named draw that is responsible for rendering multiple colored circles on an HTML canvas. The function begins by clearing the entire canvas using the clearRect method, which ensures that any previous drawings are removed. This method takes four parameters: the x and y coordinates of the top-left corner of the rectangle to clear (both set to 0), and the width and height of the rectangle (set to the canvas's width and height, respectively).

// Next, the function enters a for loop that iterates 30 times. Within each iteration, the code starts a new path for drawing by calling ctx.beginPath(). Notably, there is a redundant call to ctx.beginPath() that can be removed without affecting the functionality. The fillStyle property of the canvas context is then set to a random RGB color. This is achieved by calling a random function (assumed to be defined elsewhere in the code) three times, each time generating a random value between 0 and 255 for the red, green, and blue components of the color.

// Following this, the ctx.arc method is used to draw a circle. The method takes five parameters: the x and y coordinates of the circle's center (both generated randomly within the canvas dimensions), the radius of the circle (also generated randomly up to 50 pixels), the starting angle (0 radians), and the ending angle (2 * Math.PI radians, which represents a full circle). Finally, the ctx.fill method is called to fill the circle with the previously set color.

// Overall, this function creates a visually dynamic effect by drawing 30 randomly colored and positioned circles on the canvas each time it is called.


loop
const results = document.querySelector("#results");

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResults = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResults}\n`;
    }
    results.textContent += "Done!";
}

const calculateBtn = document.querySelector("#calculate-button");
const clearBtn = document.querySelector("#clear-button");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));



// An array of contact strings, each containing a name and a phone number separated by a colon.
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];

// Selects the first <p> element in the document and assigns it to the variable 'para'.
const para = document.querySelector("p");

// Selects the first <input> element in the document and assigns it to the variable 'input'.
const input = document.querySelector("input");

// Selects the first <button> element in the document and assigns it to the variable 'btn'.
const btn = document.querySelector("button");

// Adds a click event listener to the button element.
btn.addEventListener("click", () => {
  // Converts the value of the input field to lowercase and assigns it to 'searchName'.
  const searchName = input.value.toLowerCase();
  
  // Clears the input field.
  input.value = "";
  
  // Sets focus back to the input field.
  input.focus();
  
  // Clears the text content of the paragraph element.
  para.textContent = "";
  
  // Iterates over each contact in the 'contacts' array.
  for (const contact of contacts) {
    // Splits the contact string into an array with two elements: name and phone number.
    const splitContact = contact.split(":");
    
    // Checks if the name part of the contact (converted to lowercase) matches the search name.
    if (splitContact[0].toLowerCase() === searchName) {
      // If a match is found, sets the paragraph text content to display the contact's name and phone number.
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      // Exits the loop since the contact has been found.
      break;
    }
  }
  
  // If no contact was found (paragraph text content is still empty), sets the paragraph text content to "Contact not found."
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});