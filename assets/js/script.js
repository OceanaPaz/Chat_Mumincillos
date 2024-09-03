document.addEventListener('DOMContentLoaded', () => {
  const chatContent = document.getElementById('chat-content');
  const messageInput = document.getElementById('message-input');
  const sendBtn = document.getElementById('send-btn');

  // Función para añadir un mensaje al chat
  function addMessage(message) {
      const messageContentDiv = document.createElement('div');
      messageContentDiv.classList.add('message');

      const userDiv = document.createElement('div');
      userDiv.classList.add('user-name');
      userDiv.textContent ='Snorkita';
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message-content');
      messageDiv.classList.add('bg-primary')
      messageDiv.classList.add('text-white')
      messageDiv.textContent = message;
      messageContentDiv.appendChild(userDiv);
       messageContentDiv.appendChild(messageDiv); 
      chatContent.appendChild(messageContentDiv);
  }
  // Manejar el clic en el botón de enviar
  sendBtn.addEventListener('click', () => {
      const message = messageInput.value.trim();
      if (message) {
          addMessage(message);
          messageInput.value = ''; // Limpiar el campo de entrada
      }
  });
  // Manejar el envío del mensaje con Enter
  messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          sendBtn.click();
      }
  });
});
