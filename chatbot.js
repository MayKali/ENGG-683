// Sample code for a simple JavaScript chatbot
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value;
  appendMessage(userMessage, 'user');
  // Call function to process user message and get bot response
  const botResponse = generateBotResponse(userMessage);
  appendMessage(botResponse, 'bot');
  userInput.value = '';
});

function appendMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
}

function generateBotResponse(userMessage) {
  // Sample bot response generation
  return "I'm sorry, I'm just a simple AI assistant. How can I help you?";
}
