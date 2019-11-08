const Op = {
    iLike: (string1, string2) => {
        const value1 = (string1 || '').toLowerCase();
        const value2 = (string2 || '').toLowerCase();

        return value1.includes(value2);
    }
};

export default function() {
    this.urlPrefix = 'http://localhost:3000';


    // Author
    this.resource('authors', {
        except: ['index']
    });

    this.get('/authors', function(schema, request) {
        const query = request.queryParams['filter[query]'];

        if (query) {
            return schema.authors.where(author => {
                if (Op.iLike(author.firstName, query)) {
                    return true;
                }

                if (Op.iLike(author.lastName, query)) {
                    return true;
                }

                return false;
            });
        }

        return schema.authors.all();
    });


    // Book
    this.resource('books', {
        except: ['index']
    });

    this.get('/books', function(schema, request) {
        const query = request.queryParams['filter[query]'];

        if (query) {
            return schema.books.where(book => {
                if (Op.iLike(book.title, query)) {
                    return true;
                }

                if (Op.iLike(book.isbn, query)) {
                    return true;
                }

                return false;
            });
        }

        return schema.books.all();
    });
}