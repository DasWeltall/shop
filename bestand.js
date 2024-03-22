// Annahme: Der aktuelle Bestand ist in Variablen gespeichert
let pro1Stock = 5;
let pro2Stock = 3;

// Funktion, um den Bestand anzuzeigen
function displayStock() {
    const flumisStockElement = document.getElementById('pro1');
    const ballsStockElement = document.getElementById('pro2');

    flumisStockElement.textContent = `Nur ${pro1Stock} auf Lager`;
    ballsStockElement.textContent = `Nur ${pro2Stock} auf Lager`;
}

// Rufe die Funktion displayStock auf, um den Bestand anzuzeigen, sobald die Seite geladen ist
window.addEventListener('load', displayStock);
