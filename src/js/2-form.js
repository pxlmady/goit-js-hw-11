document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('.feedback-form');
  const storageKey = 'feedback-form-state';

  // Зчитування збереженого стану форми при завантаженні сторінки
  const storedState = JSON.parse(localStorage.getItem(storageKey)) || {};
  document.getElementById('emailInput').value = storedState.email || '';
  document.getElementById('messageInput').value = storedState.message || '';

  // Відстеження подій input і зберігання значень у локальне сховище
  form.addEventListener('input', function (event) {
    storedState[event.target.name] = event.target.value.trim();
    localStorage.setItem(storageKey, JSON.stringify(storedState));
  });

  // Очищення сховища і полів форми при сабміті
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (document.getElementById('emailInput').value.trim() && document.getElementById('messageInput').value.trim()) {
      // Виведення у консоль об'єкта з поточними значеннями
      console.log({
        email: document.getElementById('emailInput').value.trim(),
        message: document.getElementById('messageInput').value.trim()
      });

      // Очищення сховища і полів форми
      localStorage.removeItem(storageKey);
      form.reset();
    }
  });
});
