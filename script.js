// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayMessage();
            displaycmM();
            displayTicket();
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the frog.gif initially
function displayFrog() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var frogImage = new Image();
    // Set the source (file path) for the cat image
    frogImage.src = 'frog.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    frogImage.alt = 'Frog';
    frogImage.onload = function() {
        imageContainer.appendChild(frogImage);
    };
}

// Function to display the frog.gif initially
function displayTicket() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var ticketImage = new Image();
    // Set the source (file path) for the cat image
    ticketImage.src = 'ticket.png'; 
    ticketImage.alt = 'ticket';
    ticketImage.onload = function() {
        imageContainer.appendChild(ticketImage);
    };
}

function displaycmM() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var cMImage = new Image();
    // Set the source (file path) for the cat-heart image
    cMImage.src = 'cmM.png'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    cMImage.alt = 'cmM';
    // When the cat-heart image is fully loaded, add it to the image container
    cMImage.onload = function() {
        imageContainer.appendChild(cMImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

function displayMessage() {
    document.getElementById('no-button').innerText = 'Hey Catherine, my 0.5 valentine, happy valentines day! All my feelings are in the letters that I wrote you, and they have only intensified since I got back. I think about our time in Shanghai everyday, and I miss it dearly. I only wish to have you here by my side, so that I can hold you in my arms and kiss you, and to tell you all my love for you. BTW, would you happen to be willing to go on an adventure with me to Guam? :)'; 
}


// Display the cat.gif initially
displayFrog();
