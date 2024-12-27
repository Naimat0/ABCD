// Function to reveal the special message
function revealMessage() {
    const messageElement = document.getElementById("special-message");
  
    // Display the message with a smooth fade-in effect
    messageElement.style.display = 'block';
    setTimeout(() => messageElement.style.opacity = 1, 10);
  }
  