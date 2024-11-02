// Select the "No" button
const noButton = document.getElementById('noButton');

// Function to move the "No" button to a random position within the container
function moveButton() {
    const container = document.querySelector('.btn-container');
    
    // Calculate the maximum possible x and y positions within the container
    const maxX = container.clientWidth - noButton.clientWidth;
    const maxY = container.clientHeight - noButton.clientHeight;
    
    // Generate random x and y positions that stay within the boundaries
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Set the new position of the button
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Add the mouseover event to the "No" button
noButton.addEventListener('mouseover', moveButton);
