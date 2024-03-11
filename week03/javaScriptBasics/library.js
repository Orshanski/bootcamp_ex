const library = {
    books: [
        { title: "Pride and Prejudice", author: "Jane Austen" },
        { title: "1984", author: "George Orwell" },
        { title: "Hamlet", author: "William Shakespeare" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ]
};
const books = document.getElementById("books");

function displayBooks() {
    for (let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        const bookElement = document.createElement("li");
        bookElement.innerHTML = `"${book.title}" by ${book.author}`;
        books.appendChild(bookElement);
    }
}


displayBooks();