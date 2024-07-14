const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    // Display user message
    const userMessageElement = document.createElement('div');
    userMessageElement.className = 'message user-message';
    userMessageElement.textContent = userMessage;
    chatBox.appendChild(userMessageElement);

    // Clear input
    userInput.value = '';

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Get bot response
    getBotResponse(userMessage);
}

function getBotResponse(message) {
    let botMessage = '';

    if (message.toLowerCase().includes('hello' || 'hi')) {
        botMessage = 'Hi there! How can I help you today?';
    } else if (message.toLowerCase().includes('quiz')) {
        botMessage = 'You can take the quiz by clicking on the "Take a Quiz" button on the homepage.';
    } else if (message.toLowerCase().includes('contact')) {
        botMessage = 'You can contact us through the "Help Chat" section or by visiting the "Contact Us" page.';
    } else if (message.toLowerCase().includes('stress relief')) {
        botMessage = 'We offer various stress relief exercises. You can find them under the "Stress Relief Exercises" section.';
    } else if (message.toLowerCase().includes('services')) {
        botMessage = 'We provide a range of services to support your mental health. Check out the "Services" section for more details.';
    } else if (message.toLowerCase().includes('about')) {
        botMessage = 'Learn more about us in the "About Us" section.';
    } else if (message.toLowerCase().includes('help')) {
        botMessage = 'If you need help, you can chat with us here or visit the "Help Chat" section.';
    } else {
        botMessage = 'I\'m sorry, I didn\'t understand that. Can you please rephrase?';
    }

    // Display bot message
    const botMessageElement = document.createElement('div');
    botMessageElement.className = 'message bot-message';
    botMessageElement.textContent = botMessage;
    chatBox.appendChild(botMessageElement);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
