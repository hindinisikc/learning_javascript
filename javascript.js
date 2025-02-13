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


let answer = parseInt(prompt("GAEWGAE")); 

for (i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz"); 
    } else if (i % 3 === 0) {
        alert("Fizz");
    } else if (i % 5 === 0) {
        alert("Buzz");
    } else {
        alert(i);
    }
}