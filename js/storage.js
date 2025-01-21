const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

// JSON-Datei laden
function loadData() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Fehler beim Laden der Daten:", err);
        return [];
    }
}

// JSON-Datei speichern
function saveData(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
        console.error("Fehler beim Speichern der Daten:", err);
    }
}

module.exports = { loadData, saveData };