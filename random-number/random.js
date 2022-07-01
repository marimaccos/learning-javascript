// Collect input from a user
const lowLimit = prompt("Choose the lowest limit:");
const highLimit = prompt("Choose the highest limit:");

// Convert the input to a number
const lowNumber = +lowLimit;
const highNumber = +highLimit;

// Check if both are numbers and the lowNumber can be '0'
if (lowNumber >= 0 && highNumber) {

    // Use Math.random() to generate a random number between the user's input
    const numberRandom = Math.floor( Math.random() * ( highNumber - lowNumber + 1 ) ) + lowNumber;

    // Create a message displaying the random number
    document.querySelector('main').innerHTML = `<h2>Random number between ${lowNumber} and ${highNumber}:</h2> <h1>${numberRandom}</h1>`; 

} else {
    alert("You need to provide a number. Try again!");
}