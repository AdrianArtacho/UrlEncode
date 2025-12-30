# URL Encoder (GitHub Pages)

A tiny, client-side utility that converts a URL into its **URL-encoded** form using `encodeURIComponent`.

Designed to run on **GitHub Pages** with **no backend**, this tool is useful when working with scripts or embeds that require encoded URLs (for example: query-string parameters like `?csv=...`).

---

## ✨ Features

* 🔤 Paste a URL → get an **encoded URL**
* ⌨️ Press **Enter** or click **Encode**
* 📋 One-click **Copy** to clipboard
* 🔗 Generates a ready-to-use query string (e.g. `?csv=ENCODED_URL`)
* 🌐 Runs entirely in the browser
* 🚀 Works on GitHub Pages

---

## 🌍 Live Demo

Once deployed, the [tool is available](https://adrianartacho.github.io/UrlEncode/) at:

```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/

```

---

## 📁 Repository Structure

```
.
├── index.html   # UI and layout
├── style.css    # Styling
├── app.js       # Encoding logic
└── README.md    # This file
```

---

## 🧑‍💻 How to Use

1. Open the page.
2. Paste a URL into the input field.
3. Press **Enter** or click **Encode**.
4. Copy:

   * the **encoded URL**, or
   * the **query-string version** (e.g. `?csv=...`)

### Example

Input:

```
https://example.com/data?x=1&y=2
```

Output:

```
https%3A%2F%2Fexample.com%2Fdata%3Fx%3D1%26y%3D2
```

Query string:

```
?csv=https%3A%2F%2Fexample.com%2Fdata%3Fx%3D1%26y%3D2
```

---

## 🔗 Prefill via URL (Optional)

You can prefill the input field using a `u` query parameter:

```
https://YOURNAME.github.io/YOURREPO/?u=https://example.com/data?x=1&y=2
```

The tool will automatically encode the provided URL on load.

---

## 🚀 Deployment (GitHub Pages)

1. Create a new GitHub repository.
2. Add the files:

   * `index.html`
   * `style.css`
   * `app.js`
3. Go to **Settings → Pages**
4. Set:

   * **Source**: Deploy from a branch
   * **Branch**: `main` / `(root)`
5. Save.

The site will be live within seconds.

---

## 🛠 Technical Notes

* Uses JavaScript’s native `encodeURIComponent`
* No external libraries
* No cookies or tracking
* No server-side code
* Compatible with all modern browsers

---

## 📌 Typical Use Cases

* Encoding Google Sheets CSV URLs
* Preparing query parameters for embeds
* Working with GitHub Pages tools
* Sharing encoded links with collaborators
* Teaching URL encoding basics

---

## 📄 License

MIT — free to use, modify, and redistribute.

…the current structure already supports it easily.
