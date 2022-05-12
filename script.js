/* Elements */

let myLibrary = []
let newBook

/* Book constructor */
class Book {
    constructor(title, author, read) {
        this.title = form.title.value
        this.author = form.author.value
        this.read = form.read.checked
    }
}

harry = new Book("Harry Potter", "Rowling", "read")

/* Function to add a book into myLibrary[] */

function addBookToLibrary() {
    newBook = new Book(title, author, read)
    myLibrary.push(newBook)
    storeLibrary()
    
}

/* Display myLibrary[] as list */


/* Open and Close form to get user input */

function openForm() {
    document.getElementById("popupForm").style.display = "block"
  }
function closeForm() {
    document.getElementById("popupForm").style.display = "none"
  }


/* function to store library locally to save input data */

function storeLibrary() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary))
}

/* restore data from myLibrary on reload */

function restore() {
    let objects = localStorage.getItem('myLibrary') 
    if (!!myLibrary) {
        objects = JSON.parse(objects);
        myLibrary = objects;
    } else {
        console.log("wrong")
    }
    
}
restore()
console.log(myLibrary)









