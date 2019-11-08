export default (model) => {
    const { id, user, body, createdAt } = model;

    return {
        type: 'reviews',
        id,
        attributes: {
            user,
            body,
            'created-at': createdAt
        },
        links: {
            self: `/reviews/${id}`
        },
        relationships: {
            book: {
                links: {
                    related: `/reviews/${id}/book`
                }
            }
        }
    };
};