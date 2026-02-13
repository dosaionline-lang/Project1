function nextPage() {
  // Находим элементы по их ID
  const p1 = document.getElementById('page1');
  const p2 = document.getElementById('page2');

  // Одно скрываем, другое показываем
  if (p1 && p2) {
    p1.style.display = 'none';
    p2.style.display = 'block';
  }
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');

  if (input.value.trim() !== "") {
    // Пишем ваше сообщение
    chatBox.innerHTML += `<p><strong>Вы:</strong> ${input.value}</p>`;
    
    // Ответ бота через секунду
    setTimeout(() => {
      chatBox.innerHTML += `<p><strong>Бот:</strong> Круто! Чем еще помогу?</p>`;
    }, 1000);

    input.value = ""; // Очистка поля
  }
