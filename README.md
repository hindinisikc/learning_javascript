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