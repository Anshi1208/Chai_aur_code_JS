const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

let username;
const socket = new WebSocket('ws://localhost:8080');

// Display connecting message
const loadingMessage = document.createElement('div');
loadingMessage.textContent = 'Connecting to server...';
chatWindow.appendChild(loadingMessage);

socket.addEventListener('open', () => {
    chatWindow.removeChild(loadingMessage);
    console.log('Connected to the server');
});

socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
});

socket.addEventListener('close', () => {
    addMessageToChat('You have been disconnected from the server.', true);
});

joinBtn.addEventListener('click', () => {
    username = usernameInput.value;
    if (username) {
        document.getElementById('chat-container').style.display = 'block';
        usernameInput.style.display = 'none';
        joinBtn.style.display = 'none';
    }
});

sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (username && message) {
        socket.send(`${username}: ${message}`);
        addMessageToChat(`You: ${message}`);
        messageInput.value = '';
    }
});

messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

function addMessageToChat(message, fromServer = false) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add(fromServer ? 'server-message' : 'user-message');
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;  // Scroll to the bottom
}

socket.addEventListener('message', (event) => {
    addMessageToChat(event.data, true);
});

window.addEventListener('beforeunload', () => {
    if (socket.readyState === WebSocket.OPEN) {
        socket.close();
    }
});
