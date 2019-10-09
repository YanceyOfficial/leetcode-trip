class Book {
  constructor(name, isbn, pageNum) {
    this.name = name
    this.isbn = isbn
    this.pageNum = pageNum
  }

  sayPageNum() {
    console.log(this.pageNum)
  }
}

const book = new Book('iPad 说明书', '1234567890', 990)

console.log(book.name)
console.log(book.sayPageNum())

console.log('---')

class TechBook extends Book {
  constructor(name, isbn, pageNum, technology) {
    super(name, isbn, pageNum)
    this._technology = technology
  }

  sayTechnology() {
    console.log(this._technology)
  }

  get technology() {
    return this._technology
  }

  set technology(value) {
    this._technology = value
  }
}

const techBook = new TechBook('算法导论', '1234567890', 990, 'C++')

console.log(techBook.name)
console.log(techBook.sayPageNum())
console.log(techBook.sayTechnology())

console.log('---')

console.log(techBook.technology) // getter
techBook.technology = 'JavaScript' // setter
console.log(techBook.technology) // getter
