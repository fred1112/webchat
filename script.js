// Get the chat body element
const chatBody = document.getElementById("chat-body");

// Get the username input, message input, and send button
const usernameInput = document.getElementById("username-input");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Add event listener to send button
sendButton.addEventListener("click", sendMessage);

// Function to send a message
function sendMessage() {
  const username = usernameInput.value;
  const message = messageInput.value;

  if (username === "") {
    alert("Please enter a username!");
    return;
  }

  // Create a new message element with the appropriate class
  const messageElement = document.createElement("div");
  messageElement.classList.add("message");
  messageElement.classList.add(`user-${username}`);
  
  // Create a span element for the username
  const usernameElement = document.createElement("span");
  usernameElement.classList.add("username");
  usernameElement.textContent = username + ": ";
  
  // Create a span element for the message content
  const contentElement = document.createElement("span");
  contentElement.textContent = message;
  
  // Append the username and message content to the message element
  messageElement.appendChild(usernameElement);
  messageElement.appendChild(contentElement);
  
  // Append the message element to the chat body
  chatBody.appendChild(messageElement);
  
  // Clear the message input
  messageInput.value = "";
  
  // Scroll to the bottom of the chat body
  chatBody.scrollTop = chatBody.scrollHeight;
  
  // Hide the username input
  usernameInput.style.display = "none";
}
