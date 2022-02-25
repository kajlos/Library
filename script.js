const addBookButton = document.querySelector('[data-add-book]');
const submitButton = document.querySelector('[data-submit-button]');
const card = document.querySelector('[data-card]');
const overlay = document.querySelector('[data-overlay]');
const form = document.getElementById('form');
const bookGrid = document.querySelector('[data-book-grid]');
const errorfield = document.querySelector('[data-error]')
console.log(bookGrid);
addBookButton.addEventListener('click',()=>{
    let author = document.getElementById('author');
    let title = document.getElementById('title');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');
    errorfield.textContent="";
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
    let booksList = Books.find(item => {
        if(item.title == title) return true;
        else return false;
    });   
    if(booksList){
        errorfield.textContent="Book already in Library";
    }else{
        Books.push(newBook);
    card.classList.remove('active');
    overlay.classList.remove('active');
    displayCards();
    }

})
overlay.addEventListener('click',()=>{
    card.classList.remove('active');
    overlay.classList.remove('active');
})
function Book(author, title, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.createCard = function createCard(){
    let div = document.createElement('div');
    let title= document.createElement('p');
    let author= document.createElement('p');
    let pages= document.createElement('p');
    let read;
    let clas;
    let removeBtn= document.createElement('button');
    let readBtn= document.createElement('button');
    div.classList.add('book-card');
    if(this.read){
        read ='Read';
        clas ='read'
    }else{
        read="Not Read";
        clas= 'not-read';
    };
    title.textContent = this.title;
    author.textContent = this.author;
    pages.textContent = this.pages + " Pages";
    readBtn.textContent = read;
    removeBtn.textContent ='Remove';
    readBtn.classList.add(clas);
    removeBtn.classList.add('remove')
    readBtn.onclick = readToggle;
    removeBtn.onclick = remove;
    div.dataset.title=this.title;
    div.append(title);
    div.append(author);
    div.append(pages);
    div.append(readBtn);
    div.append(removeBtn);
    bookGrid.append(div);
}

function displayCards(){
    resetGrid();
    for(let book of Books){
        book.createCard();
    }
}
function resetGrid(){
    bookGrid.innerHTML="";
}

const readToggle = (e) => {
    let title = e.target.parentNode.dataset.title;
    let bookObject = Books.find(item => {
        if(item.title == title) return true;
        else return false;
    });
    if(bookObject.read==true){
        bookObject.read= false;
    }else{
        bookObject.read = true;
    }
    displayCards();
    console.log(bookObject);
}
const remove =(e)=>{
    let title = e.target.parentNode.dataset.title;
    let bookObject = Books.find(item => {
        if(item.title == title) return true;
        else return false;
    });
    console.log(bookObject);
    let index= Books.findIndex(item =>{
        if(item.title == title) return true
    });
    console.log(index);
    Books.splice(index, 1);
    delete bookObject;
    displayCards();
}