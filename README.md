# 🗳️ Bahujan Vikas Aghadi - Voter Search Engine 2025

A powerful, local-first web application designed to search and manage voter list data efficiently. Built with Node.js, SQLite, and a responsive frontend.

<img width="1920" height="1177" alt="screencapture-127-0-0-1-5500-index-html-2025-11-23-18_58_44" src="https://github.com/user-attachments/assets/b3dc14be-d753-4393-b57c-13629537bcab" />

## 🌟 Features

### 1. Fast Search
Instantly search voters by First Name, Middle Name, Last Name, or EPIC Number.
<img width="1920" height="1741" alt="screencapture-localhost-3000-2025-11-23-20_55_28" src="https://github.com/user-attachments/assets/acc1c070-e851-4dc5-8fba-b45caf0cc461" />



### 2. Detailed Voter Slips & WhatsApp Sharing
View comprehensive voter details and share them directly via WhatsApp.
*   **Mobile**: Share "Image + Text" directly.
*   **Desktop**: Send "Text Only" reliably.
<img width="1896" height="907" alt="Screenshot 2025-11-23 205348" src="https://github.com/user-attachments/assets/0ca446b8-d8e6-4723-b156-80c6fad5ea64" />


### 3. Other Features
*   **Smart Formatting**: Automatically formats messages with a Marathi greeting and English details.
*   **Secure**: Client-side protection against code inspection (Right-click, F12 disabled).
*   **Responsive Design**: Optimized for both Desktop and Mobile devices.
*   **Local Database**: Uses SQLite for fast, offline-capable data retrieval.

---

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

*   **Node.js**: Make sure you have Node.js installed. [Download Here](https://nodejs.org/)
*   **Git**: To clone the repository.

### 🛠️ Installation

1.  **Clone the Repository** (or extract the zip file):
    ```bash
    git clone <repository-url>
    cd Voterlist
    ```

2.  **Install Dependencies**:
    Run the following command to install the required packages (`express`, `sqlite3`, `xlsx`, `cors`):
    ```bash
    npm install
    ```

### 📂 Data Setup

The application reads voter data from an Excel file and converts it to a JSON file for the static website.

1.  **Prepare Excel File**:
    *   Place your voter list Excel file in the `assets` folder.
    *   Rename it to `Voter List.xlsx`.
    *   **Required Columns**: `Ward`, `Booth No.`, `Acre`, `Name`, `Voting card`, `Address`, `Age/Gender`, `Village`, `Assembly no`.

2.  **Import & Convert Data**:
    Run the following commands to create the database and then export it to JSON:
    ```bash
    node import_data.js
    node export_json.js
    ```
    *This will create `assets/data.json`, which is used by the website.*

---

## 🏃‍♂️ Running the Application

### Option 1: Local Static Server (Recommended)
You can use any static server to run the website locally.
```bash
npx http-server -p 8080
```
Then open [http://localhost:8080](http://localhost:8080).

### Option 2: Netlify (Free Hosting)
See **[DEPLOY.md](DEPLOY.md)** for easy drag-and-drop deployment instructions.

---

## 📁 Project Structure

```
Voterlist/
├── assets/              # Images (logo.jpg, Foater.jpg) and Excel data
├── node_modules/        # Installed dependencies
├── import_data.js       # Script to import Excel data to SQLite
├── index.html           # Main frontend interface (HTML/JS/CSS)
├── package.json         # Project dependencies and metadata
├── server.js            # Express server for API and static files
├── voter_data.db        # SQLite database (generated)
└── README.md            # Project documentation
```

## ⚙️ Customization

*   **Logo**: Replace `assets/logo.jpg` with your organization's logo.
*   **Footer Image**: Replace `assets/Foater.jpg` with your desired footer image.
*   **WhatsApp Message**: Edit the `getMessage()` function in `index.html` to change the slip format.
*   **Public Image Link**: Update the `[Link to Footer Image]` placeholder in `index.html` with a valid public URL for the footer image to appear in WhatsApp previews.

## 🔒 Security Note

This application includes client-side scripts to disable:
*   Right-click context menu.
*   Developer tools shortcuts (F12, Ctrl+Shift+I, etc.).

*Note: This is a basic deterrent and does not provide server-side security.*

---


### 👨‍💻 Developed by

* **Jwala Yadav**
* **Portfolio:** [jwalayadav-portfolio.netlify.app](https://jwala-yadav.netlify.app)
* **GitHub:** [Jwala-Yadav](https://github.com/Jwala-Yadav)
