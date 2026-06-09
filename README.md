# 📚 Library Management System (Flask Web App)

A simple and modern Library Management System built using Python Flask, HTML, CSS, and JavaScript.

It allows users to add and view books with a beautiful animated UI.

---

## 🚀 Features

- 📖 Add books (Title + Author)
- 📚 View all books instantly
- 🎨 Colorful animated background
- ⚡ Flask REST API
- 🖥️ Simple and clean UI
- 🔄 Real-time updates (no refresh needed)

---

## 🛠️ Tech Stack

- Python 🐍
- Flask 🌶️
- HTML5 📄
- CSS3 🎨
- JavaScript ⚡

---

## 📁 Project Structure

```
library_app/
│
├── app.py
├── templates/
│     └── index.html
│
└── static/
      ├── style.css
      └── script.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install Flask
```
pip install flask
```

---

### 2️⃣ Run Project
```
python app.py
```

---

### 3️⃣ Open in Browser
```
http://127.0.0.1:5000/
```

---

## 📡 API Endpoints

### ➕ Add Book
```
POST /add
```

**Body:**
```json
{
  "title": "Book Name",
  "author": "Author Name"
}
```

---

### 📖 Get Books
```
GET /get
```

**Response:**
```json
[
  {
    "title": "Book Name",
    "author": "Author Name"
  }
]
```

---

## 🎯 Future Improvements

- ❌ Delete book feature
- ✏️ Edit book feature
- 🗄️ SQLite database integration
- 🔐 Login system
- 📊 Admin dashboard

---

## 👨‍💻 Author

Made with ❤️ using Flask
