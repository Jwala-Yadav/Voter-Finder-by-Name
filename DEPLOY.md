# 🚀 How to Deploy to Netlify (Free)

Since we have converted your website to a **Static App**, you can now host it for **FREE** on Netlify.

## Step 1: Prepare Your Files
Make sure you have the following files in your project folder:
*   `index.html` (The main website)
*   `assets/` folder (Containing `data.json`, `logo.jpg`, `Foater.jpg`, etc.)
*   `style.css` (If you have one)

*(You do NOT need `server.js`, `voter_data.db`, or `node_modules` for Netlify)*

## Step 2: Deploy to Netlify
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  **Drag and drop** your entire `Voterlist` folder onto the page.
3.  Netlify will upload your files and give you a link (e.g., `https://random-name.netlify.app`).

## Step 3: Verify
1.  Click the link Netlify gives you.
2.  Try searching for a voter.
3.  Try the "Slip Via Whatsapp" feature.

## 🎉 Done!
Your website is now live on the internet for free!

---

### 💡 Tips
*   **Custom Domain**: You can connect a custom domain (like `voterlist.com`) in Netlify settings.
*   **Updates**: If you update the Excel file:
    1.  Run `node import_data.js` locally.
    2.  Run `node export_json.js` locally to update `data.json`.
    3.  Drag and drop the folder to Netlify again to update the site.
