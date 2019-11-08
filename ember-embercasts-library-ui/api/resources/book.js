export default (model) => {
    const { id, title, isbn, publicationDate } = model;

    return {
        type: 'books',
        id,
        attributes: {
            title,
            isbn,
            'publication-date': publicationDate
        },
        links: {
            self: `/books/${id}`
        },
        relationships: {
            author: {
                links: {
                    related: `/books/${id}/author`
                }
            },

            reviews: {
                links: {
                    related: `/books/${id}/reviews`
                }
            }
        }
    };
};