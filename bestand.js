// Annahme: Der aktuelle Bestand ist in Variablen gespeichert
let pro1Stock = 5;
let pro2sStock = 1;
let pro3sStock = 1;
let pro4sStock = 1;
let pro5sStock = 1;
let pro6sStock = 1;
let pro7sStock = 1;
let pro8sStock = 1;


// Funktion, um den Bestand anzuzeigen
function displayStock() {
    const pro1 = document.getElementById('pro1Stock');
    const pro2 = document.getElementById('pro1Stock');
    const pro3 = document.getElementById('pro1Stock');
    const pro4 = document.getElementById('pro1Stock');
 
    const pro2 = document.getElementById('balls-stock');

    pro1.textContent = `Bestand: ${pro1Stock}.`;
    pro2.textContent = `Bestand: ${pro2Stock}.`;
}

// Rufe die Funktion displayStock auf, um den Bestand anzuzeigen
displayStock();

// Hier könntest du deine Bestandsaktualisierungslogik hinzufügen
// Zum Beispiel, wenn du eine Funktion hast, die den Bestand aktualisiert, kannst du diese aufrufen
// und dann die Funktion displayStock aufrufen, um den aktualisierten Bestand anzuzeigen
