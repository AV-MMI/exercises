// Object constructor
function Book(title, author, page, haveRead){
  this.title = title,
  this.author = author,
  this.page = page,
  this.haveRead = haveRead,
}

Book.prototype.info = function(){
      return `${title}, ${author}, ${page}. ${(haveRead) ? 'already read.' : 'not read yet.'}`;
    }


const hobbit = new Book('The hobbit', 'J.R Tolkien', '349', true);
console.log(hobbit.info());
