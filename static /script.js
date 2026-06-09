async function addBook() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    await fetch('/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, author })
    });

    loadBooks();
}

async function loadBooks() {
    let res = await fetch('/get');
    let data = await res.json();

    let list = document.getElementById("bookList");
    list.innerHTML = "";

    data.forEach(book => {
        list.innerHTML += `
            <div class="book">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
        `;
    });
}
