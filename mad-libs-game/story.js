// 1. Declare variables and capture input.
const animal = prompt("Please type an animal:"); 
const adjective = prompt("Please type an adjective:");
const noun = prompt("Please type a noun:");
const place = prompt("Please type a place:");
const verb = prompt("Please type a verb(past):");   

// 2. Combine the input with other words to create a story.
const message = `<p>The ${animal} was so ${adjective} that it took the ${noun} and left the zoo. So it walked to the ${place} and ${verb}.</p>`;

// 3. Display the story inside the <main> element.
document.querySelector('main').innerHTML = message;