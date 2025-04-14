const goButton = document.getElementById('goButton');
if (goButton) {
  goButton.addEventListener('click', function () {
    window.location.href = './blog.html';
  });
}

const backButton = document.getElementById('backButton');
if (backButton) {
  backButton.addEventListener('click', function () {
    window.location.href = './index.html';
  });
}

const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('bg-barn-primary');
      btn.classList.add('bg-gray-200');
    });

    button.classList.remove('bg-gray-200');
    button.classList.add('bg-barn-primary');

    if (button.id === 'btn1') {
        window.location.href = './index.html';
      } else if (button.id === 'btn2') {
        window.location.href = './history.html';
      }
  });
});