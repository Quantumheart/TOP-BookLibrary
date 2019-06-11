let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    isRead() {
        this.read = !this.read;
    }
}


function addBookToLibrary(book) {
    myLibrary.unshift(book);
    myLibrary.splice(1, 1);
}


function deleteBookFromLibrary(index) {
    alert("The book at index : " + index + "has been deleted.");
    myLibrary.splice(index, 1);
}



const bookForm = document.getElementById('bookForm');

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        title,
        author,
        pages,
        read
    } = bookForm
    addBookToLibrary(
        new Book(
            title.value,
            author.value,
            pages.value,
            read.value == 'read' ? true : false
        )

    );

    // clears form
    [title, author, pages].forEach(input => {
        input.value = '';
    });
    createBookCard(myLibrary);
});

addBookToLibrary(new Book("Lord of the Rings: Fellowship of the Ring", "JR Tolkien", 412, false));

const cards = document.getElementById('cards');
cards.addEventListener("load", createBookCard(myLibrary));


function createBookCard(myLibrary) {
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.innerHTML = book.title;

        const info = document.createElement('p');
        info.setAttribute('class', 'card-text justify-content-center');
        info.innerHTML = "Author: " + book.author + "<br>" + " Pages: " + book.pages + "<br>" + "Read: " + book.read;

        cards.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(info);
    });

}