// TODO:

// Pre-Loader

var loader = document.getElementById("pre-loader"); //Selects the pre-loader div container
    window.addEventListener("load", function() { // adds listener for window load
    loader.style.display =  "none"; //sets pre-loader display to none
        console.log("DOMContentLoaded");
    })

// Mouse Follower

const follower = document.querySelector('.mouse-follower');
const followerSize = 30;  // Size of the follower in pixels
const offsetAdjustment = 5;  // Additional adjustment to move the follower slightly up and left

// Update the position of the follower based on mouse move
document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Adjust the position by half of the follower's width and height and add an extra adjustment
    follower.style.transform = `translate3d(${mouseX - followerSize / 5 - offsetAdjustment}px, ${mouseY - followerSize / 5 - offsetAdjustment}px, 0)`;
});

// Hero Section Background Animation

// const bubbleContainer = document.querySelector('.bubble-container');

// function createBubble() {
//   const bubble = document.createElement('div');
//   bubble.classList.add('bubble');

//   // Randomize size
//   const size = Math.random() * 60 + 20; // Bubbles between 20px and 80px
//   bubble.style.width = `${size}px`;
//   bubble.style.height = `${size}px`;

//   // Randomize position
//   bubble.style.left = `${Math.random() * 100}%`;

//   // Randomize horizontal waving effect
//   const horizontalMovement = 100 * 200 + 50; // Between 200px and 50px
//   const direction = Math.random() > 0.5 ? 1 : -1; // Randomize left or right
//   bubble.style.setProperty('--horizontal-movement', `${horizontalMovement * direction}px`);

//   // Randomize the overall animation duration
//   bubble.style.animationDuration = `${Math.random() * 5 + 5}s, ${Math.random() * 3 + 3}s`;

//   // Append the bubble to the container
//   bubbleContainer.appendChild(bubble);

//   // Remove the bubble after its animation completes
//   setTimeout(() => {
//     bubble.remove();
//   }, 10000); // Matches the longest animation duration
// }

// Create multiple bubbles at intervals
// setInterval(createBubble, 2000);


// Text-Scroll

const spans = document.querySelectorAll('.text-span');
let currentSpan = 0;

function revealLetters(span) {
    span.innerHTML = span.textContent
        .split('')
        .map((letter, i) => {
            if (letter === ' ') {
                return `<span class="letter-space" style="--i:${i}">${letter}</span>`;
            } else {
                return `<span class="letter" style="--i:${i}">${letter}</span>`;
            }
        })
        .join('');
}


function cycleText() {
    spans.forEach(span => span.classList.remove('active'));

    const span = spans[currentSpan];
    revealLetters(span);
    span.classList.add('active');

    currentSpan = (currentSpan + 1) % spans.length;

    setTimeout(cycleText, 3000); // Change text every 2 seconds
}

cycleText();


// Interactive button follow

const button = document.querySelector('.interactive-button');
const container = document.querySelector('.button-container');

// Set the distance threshold for the button to follow the cursor
const threshold = 5000;

// Add event listener to the container to track mouse movement
container.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 4;
    const buttonY = rect.top + rect.height / 2;

    const distanceX = e.clientX - buttonX;
    const distanceY = e.clientY - buttonY;

    // Check if the mouse is within the threshold distance
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < threshold) {
        // Move button towards cursor when nearby
        button.style.transform = `translate(${distanceX / 2}px, ${distanceY / 2}px)`;
        button.classList.remove('snap-back');
    } else {
        // Snap button back to its original position
        button.style.transform = `translate(0px, 0px)`;
        button.classList.add('snap-back');
    }
});

// Reset the button position when the mouse leaves the container
container.addEventListener('mouseleave', () => {
    button.style.transform = `translate(0px, 0px)`;
    button.classList.add('snap-back');
});


const buttontwo = document.querySelector('.interactive-button-2');
const containertwo = document.querySelector('.button-container-2');

// Add event listener to the container to track mouse movement
containertwo.addEventListener('mousemove', (e) => {
    const recttwo = buttontwo.getBoundingClientRect();
    const buttontwoX = recttwo.left + recttwo.width / 4;
    const buttontwoY = recttwo.top + recttwo.height / 2;

    const distancetwoX = e.clientX - buttontwoX;
    const distancetwoY = e.clientY - buttontwoY;

    // Check if the mouse is within the threshold distance
    const distancetwo = Math.sqrt(distancetwoX * distancetwoX + distancetwoY * distancetwoY);
    if (distancetwo < threshold) {
        // Move button towards cursor when nearby
        buttontwo.style.transform = `translate(${distancetwoX / 2}px, ${distancetwoY / 2}px)`;
        buttontwo.classList.remove('snap-back');
    } else {
        // Snap button back to its original position
        buttontwo.style.transform = `translate(0px, 0px)`;
        buttontwo.classList.add('snap-back');
    }
});

// Reset the button position when the mouse leaves the container
containertwo.addEventListener('mouseleave', () => {
    buttontwo.style.transform = `translate(0px, 0px)`;
    buttontwo.classList.add('snap-back');
});



