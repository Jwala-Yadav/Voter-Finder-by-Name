# Voter Search Engine

This is a local web application to search voter list data.

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Import Data**:
    (This has already been done, but if you update the Excel file, run this again)
    ```bash
    node import_data.js
    ```

3.  **Start Server**:
    ```bash
    node server.js
    ```

4.  **Open Website**:
    Go to [http://localhost:3000](http://localhost:3000) in your browser.

## Features

-   **Search**: Search by First Name, Middle Name, Last Name, or EPIC Number.
-   **Data Source**: Reads from `assets/Voter List.xlsx` imported into a local SQLite database (`voter_data.db`).
-   **Responsive Design**: Works on desktop and mobile.
