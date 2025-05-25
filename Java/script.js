var menuIcon = document.getElementById("menu-icon");
var closeIcon = document.getElementById("close-icon");
var menu = document.getElementById("menu");
var langSelect = document.getElementById("lang-select");

menuIcon.onclick = function () {
  menu.classList.add("show");
};

closeIcon.onclick = function () {
  menu.classList.remove("show");
};

// Changer la langue
function setLanguage(lang) {
  var elements = document.querySelectorAll("[data-fr]");
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = elements[i].getAttribute("data-" + lang);
  }

  var links = document.querySelectorAll("[data-href-fr]");
  for (var j = 0; j < links.length; j++) {
    links[j].href = links[j].getAttribute("data-href-" + lang);
  }
}

langSelect.addEventListener("change", function () {
  var lang = langSelect.value;
  setLanguage(lang);
  localStorage.setItem("preferredLanguage", lang); // <-- Sauvegarde la langue choisie
});

// Langue au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  var savedLang = localStorage.getItem("preferredLanguage") || "fr"; // Récupère la langue ou "fr"
  langSelect.value = savedLang;  // Met à jour la sélection
  setLanguage(savedLang);
});

// Transcription
function toggleTranscription() {
  const transcription = document.getElementById('transcription');
  if (transcription.style.display === 'none' || transcription.style.display === '') {
    transcription.style.display = 'block';
  } else {
    transcription.style.display = 'none';
  }
}


