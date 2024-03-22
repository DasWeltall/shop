// Annahme: Der aktuelle Bestand ist in Variablen gespeichert
let flumisStock = 5;
let ballsStock = 1;

// Funktion, um den Bestand anzuzeigen
function displayStock() {
    const flumisStockElement = document.getElementById('pro1');
    const ballsStockElement = document.getElementById('pro2');

    flumisStockElement.textContent = `Bestand: ${flumisStock} Flumis`;
    ballsStockElement.textContent = `Bestand: ${ballsStock} Ball`;
}

// Rufe die Funktion displayStock auf, um den Bestand anzuzeigen, sobald die Seite geladen ist
window.addEventListener('load', displayStock);
