import { addClick, contactClick, listClick } from './modules/operations.js';
import variables from './modules/link.js';
import Book from './modules/book.js';
import currentTime from './modules/showtime.js';

class ShowBook {
  constructor() {
    this.bookList = variables.booklist;
    this.addBtn = variables.addBtn;
    this.collection = JSON.parse(localStorage.getItem('bookCollection')) || [];
    this.addBtn.addEventListener('click', () => {
      this.addBook();
    });
  }

  renderCollection = () => {
    let html = '';
    this.collection.forEach((element) => {
      html += `<div class='book'>
            <span class=' white lists-header'>
             <p class='title-header bold'>${element.title}</p>
             <p class='author-header bold'>${element.author}</p>
             <button class='RemoveButton'>Remove</button>
         </span>
                 </div>`;
    });
    this.bookList.innerHTML = html;
    this.removeBtns = document.querySelectorAll('.RemoveButton');
    this.removeBtns.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.removeBook(element, index);
      });
    });
  }

  addBook = () => {
    if (variables.Title.value && variables.Author.value) {
      this.book = new Book(variables.Title.value, variables.Author.value);
      this.collection.push(this.book);
      localStorage.setItem('bookCollection', JSON.stringify(this.collection));
      this.renderCollection();
      variables.Title.value = '';
      variables.Author.value = '';
    }
  }

  removeBook = (element, bookIndex) => {
    this.collection = this.collection.filter(
      (element, index) => index !== bookIndex,
    );
    localStorage.setItem('bookCollection', JSON.stringify(this.collection));
    this.renderCollection();
  }
}

// NavBar Links

variables.ListLink.addEventListener('click', listClick);

variables.AddLink.addEventListener('click', addClick);

variables.ContactLink.addEventListener('click', contactClick);

// Show Time

const RunTime = new ShowBook();
setInterval(currentTime, 1000);

RunTime.renderCollection();
