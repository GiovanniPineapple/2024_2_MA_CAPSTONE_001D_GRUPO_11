 // Funcionalidad para abrir/cerrar el chat
document.querySelector('.chat-toggle').addEventListener('click', function() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('open');
    // Cambiar el texto del botón dependiendo de si está abierto o cerrado
    this.textContent = chatbox.classList.contains('open') ? 'Cerrar Chat' : 'Abrir Chat';
});

// Enviar mensaje cuando se hace clic en el botón o se presiona Enter
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message !== "") {
        // Crear un nuevo mensaje
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = message;

        // Añadir el mensaje al chat
        const chatMessages = document.getElementById('chat-messages');
        chatMessages.appendChild(messageElement);

        // Limpiar el input
        input.value = "";

        // Hacer scroll automático hacia el último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
