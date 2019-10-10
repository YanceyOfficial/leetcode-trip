class Book {
  readonly name: string
  readonly isbn: string
  readonly pageNum: number
  constructor(name: string, isbn: string, pageNum: number) {
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
  readonly name: string
  readonly isbn: string
  readonly pageNum: number
  protected _technology: string
  constructor(name: string, isbn: string, pageNum: number, technology: string) {
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
