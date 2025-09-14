// script.js

// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Event listeners para las pestañas
document.getElementById('muro').addEventListener('click', function() {
    showSection('muro-section');
});

document.getElementById('info').addEventListener('click', function() {
    showSection('info-section');
});

document.getElementById('photos').addEventListener('click', function() {
    showSection('photos-section');
});

// Muestra la sección de "Muro" por defecto al cargar
showSection('muro-section');

function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Muestra la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}


function showSection(sectionId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Muestra la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}
