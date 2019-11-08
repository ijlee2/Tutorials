import author from './author';
import book from './book';
import review from './review';

const resources = {
    author,
    book,
    review
};

export default function serialize(type, model) {
    const resource = resources[type];
    let data;

    if (Array.isArray(model)) {
        data = model.map(resource);

    } else {
        data = resource(model);

    }

    return { data };
};