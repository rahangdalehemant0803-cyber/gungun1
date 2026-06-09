from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# temporary storage (no database)
books = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_book():
    data = request.get_json()
    books.append({
        "title": data["title"],
        "author": data["author"]
    })
    return jsonify({"message": "Book added successfully", "books": books})

@app.route('/get')
def get_books():
    return jsonify(books)

if __name__ == '__main__':
    app.run(debug=True)
