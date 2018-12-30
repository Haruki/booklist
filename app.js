//Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "JOhn Doe",
        isbn: "234234234"
      },
      {
        title: "Book Two",
        author: "blah blusbb",
        isbn: "23094809"
      },
      {
        title: "Book Three",
        author: "Lord Vader",
        isbn: "023948"
      }
    ];

    const books = StoredBooks;

    books.forEach(element => {
      UI.addBookToList(element);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    list.appendChild(row);
  }

  static deleteBook(ele) {
    if (ele.classList.contains('delete')) {
        ele.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
  }
}

// Store class

// Event: displayBooks
document.addEventListener("DOMContentLoaded", UI.displayBooks());

//Event: add book
document.querySelector("#book-form").addEventListener("submit", e => {
  //prevent actual http form submit to a not existing url.
  e.preventDefault();
  //Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  const book = new Book(title, author, isbn);
  console.log(book);
  
  //Add book to ui
  UI.addBookToList(book);
  
  UI.clearFields();
});

//Event: REmove book
document.querySelector('#book-list').addEventListener('click', e => {
    console.log(e.target);
    UI.deleteBook(e.target);
});