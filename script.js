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
        objects = JSON.parse(objects)
        myLibrary = objects
        console.log("Items downloaded")
        createGrid()
    }
    
}

/* draw grid for each book with information */

function createGrid() {
    for (let i = 0; i<myLibrary.length;i++) {
        let block = document.createElement("div")
        block.classList.add("block")

        /* Adding information about book into grid */

        let bookTitle = document.createElement("div")
        bookTitle.classList.add("bookTitle")
        bookTitle.textContent = myLibrary[i].title
        block.appendChild(bookTitle)

        let bookAuthor = document.createElement("div")
        bookAuthor.classList.add("bookAuthor")
        bookAuthor.textContent = myLibrary[i].author
        block.appendChild(bookAuthor)

        let bookPages = document.createElement("div")
        bookPages.classList.add("bookPages")
        bookPages.textContent = myLibrary[i].pages
        block.appendChild(bookPages)

        let readButton = document.createElement("button")
        readButton.classList.add("readButton")
        readButton.setAttribute("id", i)
        if (myLibrary[i].read === false) {
            readButton.textContent = "Not Read"
            readButton.style.backgroundColor = "#ef4444"
        } else {
            readButton.textContent = "Read"
            readButton.style.backgroundColor = "#22c55e"
        }
        readButton.addEventListener("click", function() {
            if (myLibrary[i].read === false) {
                readButton.textContent = "Read"
                readButton.style.backgroundColor = "#22c55e"
                myLibrary[i].read = true
            } else if (myLibrary[i].read === true) {
                readButton.textContent = "Not Read"
                readButton.style.backgroundColor = "#ef4444" 
                myLibrary[i].read = false
            }
        })
        block.appendChild(readButton)

        let deleteBook = document.createElement("button")
        deleteBook.classList.add("deleteBook")
        deleteBook.textContent = "Remove Book"
        deleteBook.addEventListener("click", function() {
            myLibrary.splice(i, 1)
            storeLibrary()
            location.reload()
                  
        })
        block.appendChild(deleteBook)
        
        document.getElementById("bookContainer").appendChild(block)
    }
}

/* */
restore()
console.log(myLibrary)











