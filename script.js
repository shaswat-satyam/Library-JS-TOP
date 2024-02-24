var idx = 0
const myLibrary = []

function Book(title,author,pages,isRead){
  this.title = title 
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.id = idx + 1
  idx += 1
  this.info = function (){
    if(isRead){
      return `${title} by ${author}, ${pages},read`
    } else {
      return `${title} by ${author}, ${pages},not read yet`
    }
  }
}

function addNewBookForm(){
  let title = document.getElementById("formTitle").value
  let author = document.getElementById("formAuthor").value
  let pages = document.getElementById("formPages").value
  let read = document.getElementById("formRead").checked
  console.log(read)
  read = read?"Yes":"No"
  const newBook = new Book(title,author,pages,read)
  myLibrary.push(newBook)
  addNewRow(newBook)
  document.getElementById("form").style.display = 'none'
}

function addBookToLibrary(){
  let title = prompt("Enter the title of the book ")
  let author = prompt("Enter the name of the author")
  let pages = prompt("Enter the number of pages in the book")
  let read = prompt("Is the Book already read (Y/N)")
  myLibrary.push(new Book(title,author,pages,read))
}
function removeBook(id){
  if(myLibrary.length == 1){
    myLibrary.splice(0,1) 
    display()
    return;
  }
  let i;
  for (i = 0; i < myLibrary.length; i++) {
    let element = myLibrary[i];
    if(element.id == id){
      myLibrary.splice(i,1)
      break;
    }
  }
  display() }

function addNewRow(Book){
  const newRow = document.createElement("tr")
  const titleCell = document.createElement("td")
  titleCell.innerHTML=(Book.title)

  const authorCell = document.createElement("td")
  authorCell.innerHTML=(Book.author)

  const pagesCell = document.createElement("td")
  pagesCell.innerHTML=(Book.pages)

  const readCell = document.createElement("td")
  readCell.innerHTML=(Book.isRead)
 
  idx = myLibrary.length
  const removeButton = document.createElement("button")
  removeButton.innerHTML = `Remove ${Book.title}`
  removeButton.setAttribute("onclick",`removeBook(${Book.id})`)  
  removeButton.class = "removeButton"

  const readButton = document.createElement("button")
  readButton.innerHTML = `Read ${Book.title}`
  readButton.setAttribute("onclick",`readBook(${Book.id})`)
  removeButton.class = 'Read Button'

  newRow.appendChild(titleCell)
  newRow.appendChild(authorCell)
  newRow.appendChild(pagesCell)
  newRow.appendChild(readCell)
  newRow.appendChild(removeButton)
  newRow.appendChild(readButton)

  const table = document.getElementById('tbody') 
  table.append(newRow)
}

function readBook(id){
  for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
    if(element.id == id){
      element.isRead = element.isRead == 'Yes'?"No":"Yes"
    }
    
  }
  display()
}

function addNewBook(){
  addBookToLibrary()
  addNewRow(myLibrary.at(-1)) 
}

function display(){
  const tablebody = document.getElementById('tbody')
  tablebody.innerHTML = ""
  for (let i = 0; i < myLibrary.length; i++) {
    addNewRow(myLibrary[i])
  }
}

function showForm(){
  const form = document.getElementById('form')
  form.style.display = form.style.display == "block"? "none":"block"
}

display()
document.getElementById("form").style.display = "none"

