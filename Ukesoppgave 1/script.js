// Hent alle knapper med class "category-button"
const categoryButtons = document.querySelectorAll('.category-button');

// Hent alle seksjoner med class "category-section"
const categorySections = document.querySelectorAll('.category-section');

// Lytt til klikk på hver kategoriknapp
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Fjern "active" klassen fra alle knapper
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Legg til "active" klassen på den klikkede knappen
        button.classList.add('active');

        // Skjul alle kategoriseksjoner
        categorySections.forEach(section => section.style.display = 'none');

        // Vis den tilsvarende kategoriseksjonen basert på data-attributtet
        const category = button.getAttribute('data-category');
        document.getElementById(category).style.display = 'block';
    });
});
