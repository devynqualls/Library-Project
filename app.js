let myLibrary = [];

const submitBtn = document.getElementById('submitBtn');
const libraryContainer = document.getElementById('libraryContainer');
const newBookBtn = document.getElementById("newBookBtn");
const bookPopup = document.getElementById("bookPopup");
const closeFormBtn = document.getElementById("closeFormClass");
const addBookBtn = document.getElementById("addBookBtn");


function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,

    this.info = function(){
        return (this.info, this.author, this.pages, this.read)
    }
}

function addBookToLibrary(book){
    //let newBook = new Book(title, author, pages, read);
    let newBook = new Book(
        document.getElementById('titleInput').value,
        document.getElementById("authorInput").value,
        document.getElementById("pagesInput").value,
        document.getElementById("radioInput").value

    )
    myLibrary.push(book);
    document.querySelector('form').reset();
}

function displayBook(){
    for (let i=0; i < myLibrary.length; i++){
        libraryContainer.appendChild(i)
    }
}

function openForm() {
    bookPopup.style.display = "block";
  }


function closeForm() {
    bookPopup.style.display = "none";
  }

newBookBtn.addEventListener("click", openForm);

closeFormBtn.addEventListener("click", closeForm);

addBookBtn.addEventListener("click", addBookToLibrary);