function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id == id)
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return accounts
}

function numberOfBorrows(account, books) {
let acID = account.id
let count = 0
books.forEach((book) =>{
   const loans = book.borrows
   loans.forEach((loan) =>{
     if (loan.id.includes(acID)){
         count += 1
      }
    })
  })
return count
}


function addAuthorToBook(books, authors){
  for (let book in books){
  for (let writer in authors){
    if (authors[writer].id === books[book].authorId){
      books[book].author = authors[writer]
    }
  }
}
return books
} 

function booksInPossession(account, books, authors) {
const acID = account.id
const checked = []
let updateBooks = addAuthorToBook(books, authors)
updateBooks.forEach((book) =>{
 const loans = book.borrows
 loans.forEach((loan) =>{
   if (loan.id.includes(acID) && loan.returned === false){
       checked.push(book)
    }
  })
})
return checked
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
