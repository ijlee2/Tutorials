import Router from 'koa-router';
import Sequelize from 'sequelize';

const router = new Router();

router.get('/', async (context) => {
    const query = context.query['filter[query]'];
    let books;

    if (query) {
        books = await context.app.db.Book.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        title: {
                            [Sequelize.Op.iLike]: `%${query}%`
                        }
                    },
                    {
                        isbn: {
                            [Sequelize.Op.iLike]: `%${query}%`
                        }
                    }
                ]
            }
        });

    } else {
        books = await context.app.db.Book.findAll();

    }

    context.body = context.app.serialize('book', books);
});

router.get('/:id', async (context) => {
    const { id } = context.params;
    const book = await context.app.db.Book.findOrFail(id);

    context.body = context.app.serialize('book', book);
});

router.get('/:id/author', async (context) => {
    const { id } = context.params;
    const book = await context.app.db.Book.findOrFail(id);

    const author = await book.getAuthor();

    context.body = context.app.serialize('author', author);
});

router.get('/:id/reviews', async (context) => {
    const { id } = context.params;
    const book = await context.app.db.Book.findOrFail(id);

    const reviews = await book.getReviews();

    context.body = context.app.serialize('review', reviews);
});

router.post('/', async (context) => {
    const attributes = context.getAttributes();
    const book = await context.app.db.Book.create(attributes);

    context.status = 201;
    context.set('Location', `/books/${book.id}`);

    context.body = context.app.serialize('book', book);
});

router.patch('/:id', async (context) => {
    const { id } = context.params;
    const book = await context.app.db.Book.findOrFail(id);

    const attributes = context.getAttributes();
    book.set(attributes);

    await book.save();

    context.body = context.app.serialize('book', book);
});

router.del('/:id', async (context) => {
    const { id } = context.params;
    const book = await context.app.db.Book.findOrFail(id);

    await book.destroy();

    context.status = 204;
    context.body = null;
});

export default router.routes();