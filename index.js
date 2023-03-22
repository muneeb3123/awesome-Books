class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.collection = JSON.parse(localStorage.getItem('bookCollection')) || [];
    this.bookList = document.querySelector('#bookList');
    this.addBtn = document.getElementById('addBtn');
    this.renderCollection();
    this.addBtn.addEventListener('click', this.addBook.bind(this));
  }

  renderCollection() {
    let html = '';
    this.collection.forEach((book, index) => {
      html += `<div class='book'>
          <div class="bookTitle">"${book.title}"</div>
          <div class="authorTitle">${book.author}</div>
          <button>Remove</button>
          </div>`;
    });
    this.bookList.innerHTML = html;
    const removeBtns = document.querySelectorAll('.book button');
    removeBtns.forEach((btn, index) => {
      btn.onclick = () => {
        this.removeBook(index);
      };
    });
  }
  
  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
      const book = new Book(title, author);
      this.collection.push(book);
      localStorage.setItem('bookCollection', JSON.stringify(this.collection));
      this.renderCollection();
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  }

  removeBook(bookIndex) {
    this.collection = this.collection.filter((book, index) => index !== bookIndex);
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
    this.renderCollection();
  }  
}

const bookCollection = new BookCollection();
