// const bookList = document.querySelector('#bookList');
const addBtn = document.getElementById('addBtn');
let collection = JSON.parse(localStorage.getItem('bookCollection')) ||[];

function renderCollection() {
  let html = '';
  collection.forEach((element, index) => {
    const removeBtn = `<button onclick='removeBook(${index})'>Remove</button>`;
    html += `<div class='book'>
        <div>${element.title}</div>
        <div>${element.author}</div>
        ${removeBtn}
        <hr>
        </div>`;
  });
  bookList.innerHTML = html;
}

// eslint-disable-next-line no-unused-vars
function removeBook(bookIndex) {
  collection = collection.filter((element, index) => index !== bookIndex);
  localStorage.setItem('bookCollection', JSON.stringify(collection));
  renderCollection();
}

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title && author) {
    const book = { title, author };
    collection.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(collection));
    renderCollection();
  }
}
renderCollection();
addBtn.addEventListener('click', addBook);