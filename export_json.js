const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'voter_data.db');
const outputPath = path.join(__dirname, 'assets', 'data.json');

// Connect to DB
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
        process.exit(1);
    }
});

console.log("Reading data from database...");

// Query all data
db.all("SELECT * FROM voters", [], (err, rows) => {
    if (err) {
        throw err;
    }

    console.log(`Found ${rows.length} records.`);

    // Write to JSON file
    const jsonContent = JSON.stringify(rows, null, 2); // Pretty print for readability, though minified is better for prod

    fs.writeFile(outputPath, jsonContent, 'utf8', (err) => {
        if (err) {
            console.error("Error writing JSON file:", err);
            process.exit(1);
        }
        console.log(`Successfully exported data to ${outputPath}`);
        console.log(`File size: ${(jsonContent.length / 1024).toFixed(2)} KB`);
    });
});

db.close();
