class Book {
    constructor(title, authors, edition) {
        this.authors = authors;
        this.title = title;
        this.edition = edition;
    }
}

class Library {
    constructor(params) {
        this.bookcase = [];
    }

    shelve(book) {
        // Should store the book alphabetically
        // Should be chainable
        this.bookcase.push(book);
        this.bookcase.sort();
        return this;
    }

    findByTitle(keyword) {
        for (let book of this.bookcase) {
            if (book.title.toLowerCase().includes(keyword.toLowerCase())) {
                return book;
            }
        }
        return "No books found with that keyword...";
    }

    get list() {
        // Returns all the books in an array
        return this.bookcase;
    }
}

// Books
const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book(
  "The Rust Programming Language",
  ["Steve Klabnik", "Carol Nichols"],
  2
);

const lib = new Library();

lib.shelve(eloquentJS).shelve(speakingJS).shelve(theRustProgLang);

console.log(lib.findByTitle("SPEAK"));