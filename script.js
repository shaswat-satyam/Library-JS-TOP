const myLibrary = [{
  title: "b1",
  author: "a1",
  pages: 123,
  isRead: true,
  id: 0
}]

function Book(title,author,pages,isRead,id){
  this.title = title 
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.id = id
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
  let read = document.getElementById("formRead").value

  const newBook = new Book(title,author,pages,read.toUpperCase().charAt(0) =="N" || read.length == 0?"No":"Yes",myLibrary.length)
  myLibrary.push(newBook)
  addNewRow(newBook)
  document.getElementById("form").style.display = 'none'
}

function addBookToLibrary(){
  let title = prompt("Enter the title of the book ")
  let author = prompt("Enter the name of the author")
  let pages = prompt("Enter the number of pages in the book")
  let read = prompt("Is the Book already read (Y/N)")
  myLibrary.push(new Book(title,author,pages,read,myLibrary.length)) 
}

function removeBook(id){
  for (let i = 0; i < myLibrary.length; i++) {
    const element = myLibrary[i];
    if(element.id = id){
      break;
    }
  }
  myLibrary.splice(i,1)
}

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
  removeButton.innerHTML = `Remove ${myLibrary.length}`
  removeButton.setAttribute(onclick,`removeBook(${idx}`)  
  removeButton.class = "removeButton"

  newRow.appendChild(titleCell)
  newRow.appendChild(authorCell)
  newRow.appendChild(pagesCell)
  newRow.appendChild(readCell)
  newRow.appendChild(removeButton)

  const table = document.getElementById('table') 
  table.append(newRow)

  console.log(Book)
}

function addNewBook(){
  addBookToLibrary()
  addNewRow(myLibrary.at(-1)) 
}

function showForm(){
 document.getElementById("form").style.display = "block"
}

for (let i = 0; i < myLibrary.length; i++) {
 addNewRow(myLibrary[i]) 
}
document.getElementById("form").style.display = "none"

