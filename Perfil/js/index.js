const icon = document.getElementById("optionsIcon");
const optionsMenu = document.getElementById('optionsMenu');

icon.addEventListener('click', function() {
  optionsMenu.classList.toggle('show');
});