const addBookButton = document.querySelector('[data-add-book]');
const submitButton = document.querySelector('[data-submit-button]');
const card = document.querySelector('[data-card]');
const overlay = document.querySelector('[data-overlay]');

addBookButton.addEventListener('click',()=>{
    card.classList.add('active');
    overlay.classList.add('active');
})
submitButton.addEventListener('click',()=>{
    card.classList.remove('active');
    overlay.classList.remove('active');
})