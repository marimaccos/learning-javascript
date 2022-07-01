let html = '';
let randomRGB;

function randomColor() {
    return Math.floor( Math.random() * 256 );
} 

for ( let i = 1; i <= 5; i++) {
        
    randomRGB = `rgb( ${randomColor()}, ${randomColor()}, ${randomColor()} )`;
    html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;