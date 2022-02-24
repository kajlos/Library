const addBookButton = document.querySelector('[data-add-book]');
const submitButton = document.querySelector('[data-submit-button]');
const card = document.querySelector('[data-card]');
const overlay = document.querySelector('[data-overlay]');
const form = document.getElementById('form');
const bookGrid = document.querySelector('[data-book-grid]')
console.log(bookGrid);
addBookButton.addEventListener('click',()=>{
    let author = document.getElementById('author');
    let title = document.getElementById('title');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');
    author.value = '';
    title.value = '';
    pages.value = '';
    read.checked = false;
    card.classList.add('active');
    overlay.classList.add('active');
})
let Books = [];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let author = document.getElementById('author').value;
    let title = document.getElementById('title').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let newBook = new Book(author, title, pages, read);
    Books.push(newBook);
    card.classList.remove('active');
    overlay.classList.remove('active');
    newBook.createCard();
})
overlay.addEventListener('click',()=>{
    card.classList.remove('active');
    overlay.classList.remove('active');
})
function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
Book.prototype.deleteBook = function(book){
    target.parentElement.remove();
}
Book.prototype.createCard = function createCard(){
    let div = document.createElement('div');
    let read;
    let clas;
    div.classList.add('book-card');
    if(this.read){
        read ='Read';
        clas ='read'
    }else{
        read="Not Read";
        clas= 'not-read';
    };
    div.dataset.title=`${this.title}`;
    div.innerHTML = `<p>${this.author} </p>
    <p>${this.title} </p>
    <p>${this.pages} </p>
    <button data-readButton class='${clas}'>${read} </button>
    <button data-removeButton class='remove'>Remove</button>`
    bookGrid.append(div);
}

function displayCards(){
    Books.forEach(this.createCard());
}

document.querySelector('[data-removeButton]').addEventListener('click',(e)=>{
    Book.deleteBook(e.target);
})