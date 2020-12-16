function totalBooksCount(books) {
  const count = books.reduce((counter, book) => {
    if (book) counter += 1
    return counter;
  }, 0)
  return count
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  let counter = 0;
  books.map(z => z.borrows).forEach(x=> {
    x.forEach(x => {
      if(x.returned == false)
        {
          counter++;
        }
     })
  });
  return counter;
}

function genreCount(books, genre)
{
  return books.filter(book=>book.genre == genre).length;
}

function mostCommonGenres(books) {
  let genres = books.map(x=>x.genre);
  let results = [];
  genres.forEach(x => 
  {
    if(!results.find(y => y.name == x))
      {
         results.push({
          "name": x, 
          "count" : genreCount(books, x)
        })
      }   
  });
  return results.sort((a, b) => b.count - a.count).slice(0, 5);
}

function mostPopularBooks(books) {
  let results = [];
  books.forEach(bk => 
  { 
    results.push({
     "name": bk.title, 
     "count" : bk.borrows.length 
    });
  })
  //console.log(results.sort((a, b) => b.count - a.count).slice(0, 5))
  return results.sort((a, b) => b.count - a.count).slice(0, 5);
}

function countBookByAuthor(books, author){
  let count = 0
  books.forEach(book =>{
    if(book.authorId === author.id)
      count += book.borrows.length
  })
  return count
}

function mostPopularAuthors(books, authors) {
  let results = [];
  authors.forEach(author => 
  { 
      let counts = countBookByAuthor(books,author)
    results.push({
     "name": `${author.name.first} ${author.name.last}`, 
     "count" : counts
    });
  })
  return results.sort((a, b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
