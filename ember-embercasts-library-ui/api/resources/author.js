export default (model) => {
    const { id, firstName, lastName } = model;

    return {
        type: 'authors',
        id,
        attributes: {
            'first-name': firstName,
            'last-name': lastName
        },
        links: {
            self: `/authors/${id}`
        },
        relationships: {
            books: {
                links: {
                    related: `/authors/${id}/books`
                }
            }
        }
    };
};