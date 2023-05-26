// Função para alternar o tema entre light e dark
function toggleDarkTheme() {
  var body = document.body;
  body.classList.toggle('dark-theme');
}

// Verifica o estado do tema ao carregar a página
window.addEventListener('load', function() {
  var body = document.body;
  var themeToggleSwitch = document.getElementById('switch-shadow');

  // Define o tema com base no estado do interruptor
  if (themeToggleSwitch.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  // Adiciona um evento de escuta ao interruptor para alternar o tema
  themeToggleSwitch.addEventListener('change', function() {
    toggleDarkTheme();
  });
});
