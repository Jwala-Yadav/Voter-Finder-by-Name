const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files (index.html, assets)

const dbPath = path.join(__dirname, 'voter_data.db');
const db = new sqlite3.Database(dbPath);

// Search API
app.get('/api/search', (req, res) => {
    const { first, middle, last, epic } = req.query;

    let sql = "SELECT * FROM voters WHERE 1=1";
    const params = [];

    if (first) {
        sql += " AND name LIKE ?";
        params.push(`%${first}%`);
    }
    if (middle) {
        sql += " AND name LIKE ?";
        params.push(`%${middle}%`);
    }
    if (last) {
        sql += " AND name LIKE ?";
        params.push(`%${last}%`);
    }
    if (epic) {
        sql += " AND epic_no LIKE ?";
        params.push(`%${epic}%`);
    }

    sql += " LIMIT 100";

    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get all (limit 100)
app.get('/api/voters', (req, res) => {
    db.all("SELECT * FROM voters LIMIT 100", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
