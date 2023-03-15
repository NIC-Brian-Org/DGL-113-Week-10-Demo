/*
 * using setInterval()
 */

const square1Element = document.getElementById('square1');

let angle1 = 0;

setInterval( () => {
    angle1 = (angle1+2) % 360;
    square1Element.style.transform = `rotate(${angle1}deg)`;
}, 1000/60);

/*
 * using requestAnimationFrame()
 */

const square2Element = document.getElementById('square2');

let angle2 = 0;

function rotate () {
    angle2 = (angle2+2) % 360;
    square2Element.style.transform = `rotate(${angle2}deg)`;
    requestAnimationFrame(rotate);
}

requestAnimationFrame( rotate );
