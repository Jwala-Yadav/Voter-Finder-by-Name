const sqlite3 = require('sqlite3').verbose();
const xlsx = require('xlsx');
const path = require('path');

const dbPath = path.join(__dirname, 'voter_data.db');
const excelPath = path.join(__dirname, 'assets', 'Voter List.xlsx');

const db = new sqlite3.Database(dbPath);

const workbook = xlsx.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS voters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ward TEXT,
        booth_no TEXT,
        acre TEXT,
        name TEXT,
        epic_no TEXT,
        address TEXT,
        age_gender TEXT,
        village TEXT,
        assembly_info TEXT
    )`);

    const stmt = db.prepare(`INSERT INTO voters (
        ward, booth_no, acre, name, epic_no, address, age_gender, village, assembly_info
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);

    let count = 0;
    db.run("BEGIN TRANSACTION");
    data.forEach(row => {
        stmt.run(
            row['Ward'],
            row['Booth No.'],
            row['Acre'],
            row['Name'],
            row['Voting card'],
            row['Address'],
            row['Age/Gender'],
            row['Village'],
            row['Assembly no']
        );
        count++;
    });
    db.run("COMMIT");
    stmt.finalize();

    console.log(`Imported ${count} records.`);
});

db.close();
