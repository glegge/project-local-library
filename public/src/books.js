function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id )
  return found
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id )
  return found
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let borrowers = []
  const {borrows} = book
  accounts.forEach((account)=>{
    borrows.forEach((transaction) =>{
      if(transaction.id === account.id){
        let accountObj = {...transaction,...account}
        borrowers.push(accountObj)
      }
    })
  })
  return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
