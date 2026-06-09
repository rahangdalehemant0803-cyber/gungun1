# 📚 Library Management System (Flask Web App)

A simple and modern **Library Management System** built using **Python Flask, HTML, CSS, and JavaScript**.

It allows users to **add and view books dynamically** with a beautiful animated UI and REST API backend.

---

## 🚀 Features

- 📖 Add new books (Title + Author)
- 📚 View all books instantly
- 🎨 Colorful animated gradient background
- ⚡ Flask REST API backend
- 🖥️ Clean and responsive UI
- 🔄 Real-time updates without page reload

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
├── README.md
│
├── templates/
│     └── index.html
│
└── static/
      ├── style.css
      ├── script.js
      └── screenshot.png
```

---

## ⚙️ Installation & Setup

### 1️⃣ Install Flask
```bash
pip install flask
```

---

### 2️⃣ Run the project
```bash
python app.py
```

---

### 3️⃣ Open in browser
```
http://127.0.0.1:5000/
```

---

## 📡 API Endpoints

### ➕ Add Book
```http
POST /add
```

**Request Body:**
```json
{
  "title": "Book Name",
  "author": "Author Name"
}
```

---

### 📖 Get All Books
```http
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

## 📸 UI Preview
<img width="1903" height="907" alt="image" src="https://github.com/user-attachments/assets/edaa2174-cb97-4cb3-905e-03ebb5995edf" />


```md
![Library Management System Screenshot](static/screenshot.png)
```

---

## 🎯 Future Improvements

- ❌ Delete book feature
- ✏️ Edit book feature
- 🗄️ SQLite database integration
- 🔐 Login system (Admin/User)
- 📊 Dashboard analytics

---

## 🤝 Contributing

Feel free to fork this project and improve it. Pull requests are welcome.

---

## 📜 License

This project is open-source and free to use.

---

## 👨‍💻 Author
Hemant Rahangdale

Made with ❤️ using Flask
