let library = []

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this. pages = pages
    this.read = read
    this.info = function(){
        return `${this.title} by ${this.author}, ${pages} pages long, Read: ${this.read}`};
}


function addBookToLibrary(Book){
    library.push(book);
}
