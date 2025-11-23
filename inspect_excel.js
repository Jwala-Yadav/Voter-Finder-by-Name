const xlsx = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'Voter List.xlsx');
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Get all data as array of arrays
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
// Log only first 5 rows
console.log(JSON.stringify(data.slice(0, 5), null, 2));
