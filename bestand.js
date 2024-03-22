
// Annahme: Der aktuelle Bestand ist in Variablen gespeichert
let pro1Stock = 5;
let pro2sStock = 3;
let pro3sStock = 7;
let pro4sStock = 11;
let pro5sStock = 1;
let pro6sStock = 1;
let pro7sStock = 1;
let pro8sStock = 1;


// Funktion, um den Bestand anzuzeigen
function displayStock() {
    const pro1 = document.getElementById('pro1Stock');
    const pro2 = document.getElementById('pro2Stock');
    const pro3 = document.getElementById('pro3Stock');
    const pro4 = document.getElementById('pro4Stock');
    const pro5 = document.getElementById('pro5Stock');
    const pro6 = document.getElementById('pro6Stock');
    const pro7 = document.getElementById('pro7Stock');
    const pro8 = document.getElementById('pro8Stock');
 
    

    pro1.textContent = `Bestand: ${pro1Stock}.`;
    pro2.textContent = `Bestand: ${pro2Stock}.`;
    pro3.textContent = `Bestand: ${pro3Stock}.`;
    pro4.textContent = `Bestand: ${pro4Stock}.`;
    pro5.textContent = `Bestand: ${pro5Stock}.`;
    pro6.textContent = `Bestand: ${pro6Stock}.`;
    pro7.textContent = `Bestand: ${pro7Stock}.`;
    pro8.textContent = `Bestand: ${pro8Stock}.`;
}

// Rufe die Funktion displayStock auf, um den Bestand anzuzeigen

// Hier könntest du deine Bestandsaktualisierungslogik hinzufügen
// Zum Beispiel, wenn du eine Funktion hast, die den Bestand aktualisiert, kannst du diese aufrufen
// und dann die Funktion displayStock aufrufen, um den aktualisierten Bestand anzuzeigen

// Rufe die Funktion displayStock auf, um den Bestand anzuzeigen, sobald die Seite geladen ist
window.addEventListener('load', displayStock);
