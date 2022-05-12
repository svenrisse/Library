/* Elements */

let myLibrary = []
let newBook

/* Book constructor */
class Book {
    constructor(title, author, pages, read) {
        this.title = form.title.value
        this.author = form.author.value
        this.pages = form.pages.value
        this.read = form.read.checked
    }
}

/* Function to add a book into myLibrary[] */

function addBookToLibrary() {
    newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook)
    storeLibrary()
    
}

/* Open and Close form to get user input */

let modal = document.getElementById("myModal")
let openButton = document.getElementById("openButton")
let closeButton = document.getElementById("closeButton")

openButton.onclick = function() {
    modal.style.display = "block"
}

closeButton.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

/* function to store library locally to save input data */

function storeLibrary() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
}

/* restore data from myLibrary on reload */

function restore() {
    if (!localStorage.myLibrary) {
        console.log("mylibrary empty")
        createGrid()
    } else {
        let objects = localStorage.getItem('myLibrary') 
        objects = JSON.parse(objects);
        myLibrary = objects;
        console.log("Items downloaded")
        createGrid()
    }
    
}

/* draw grid for each book */

function createGrid() {
    for (let i = 0; i<myLibrary.length;i++) {
        let block = document.createElement("div")
        block.classList.add("block")
        document.getElementById("bookContainer").appendChild(block)
    }
}


/* */
restore()
console.log(myLibrary)











