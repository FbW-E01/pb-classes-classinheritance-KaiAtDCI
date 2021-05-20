class Publication {

    static numberOfPublications = 0;

    id = null;
    authors = null;
    name = null;
    content = null;
    created = null;

    constructor(authors, name, content) {
        this.id = Publication.numberOfPublications++;
        this.authors = authors;
        this.name = name;
        this.content = content;
        this.created = new Date();
    }

    describe() {
        const description = `id: ${this.id}, 
                             authors: ${this.authors},   
                             name: ${this.name},   
                             content: ${this.content},   
                             created: ${this.created.toLocaleString()},   
                            `;
    }
}

class BlogPost extends Publication {
    edited = null;
    address = null;

    constructor(authors, name, content, address) {
        super(authors, name, content);
        this.address = address;
        this.edited = false;
    }

    describe() {
        const description = `id: ${this.id}, 
                             authors: ${this.authors},   
                             name: ${this.name},   
                             content: ${this.content},   
                             created: ${this.created.toLocaleString()},   
                             address: ${this.address},
                             edited: ${this.edited},
                            `;
    }
}

class Book extends Publication {

    isbn = '';

    constructor(authors, name, content, isbn) {
        super(authors, name, content);
        this.isbn = isbn;
    }

    describe() {
        const description = `id: ${this.id}, 
                             authors: ${this.authors},   
                             name: ${this.name},   
                             content: ${this.content},   
                             created: ${this.created.toLocaleString()},   
                             isbn: ${this.isbn},
                            `;
    }

}

class Score extends Publication {

    type = '';

    constructor(authors, name, content, type) {
        super (authors, name, content);
        this.type = type;
    }
}


console.log(new Publication(['Joel', 'Milad'], 'Working for DCI', 'Content ...'));
console.log(new BlogPost(['Joel', 'Milad'], 'Working for DCI', 'Content ...', 'Leipzig/Berlin'));
console.log(new Book(['Joel', 'Milad'], 'Working for DCI', 'Content ...', 'Leipzig/Berlin', 'XXXX-XX-XX-X'));
console.log(new Score(['Joel', 'Milad'], 'Working for DCI', 'Content ...', 'Bundesliga'));


