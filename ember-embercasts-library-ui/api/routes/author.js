import Router from 'koa-router';
import Sequelize from 'sequelize';

const router = new Router();

router.get('/', async (context) => {
    const query = context.query['filter[query]'];
    let authors;

    if (query) {
        authors = await context.app.db.Author.findAll({
            where: {
                [Sequelize.Op.or]: [
                    {
                        firstName: {
                            [Sequelize.Op.iLike]: `%${query}%`
                        }
                    },
                    {
                        lastName: {
                            [Sequelize.Op.iLike]: `%${query}%`
                        }
                    }
                ]
            }
        });

    } else {
        authors = await context.app.db.Author.findAll();

    }

    context.body = context.app.serialize('author', authors);
});

router.get('/:id', async (context) => {
    const { id } = context.params;
    const author = await context.app.db.Author.findOrFail(id);

    context.body = context.app.serialize('author', author);
});

router.get('/:id/books', async (context) => {
    const { id } = context.params;
    const author = await context.app.db.Author.findOrFail(id);

    const books = await author.getBooks();

    context.body = context.app.serialize('book', books);
});

router.post('/', async (context) => {
    const attributes = context.getAttributes();
    const author = await context.app.db.Author.create(attributes);

    context.status = 201;
    context.set('Location', `/authors/${author.id}`);

    context.body = context.app.serialize('author', author);
});

router.patch('/:id', async (context) => {
    const { id } = context.params;
    const author = await context.app.db.Author.findOrFail(id);

    const attributes = context.getAttributes();
    author.set(attributes);

    await author.save();

    context.body = context.app.serialize('author', author);
});

router.del('/:id', async (context) => {
    const { id } = context.params;
    const author = await context.app.db.Author.findOrFail(id);

    await author.destroy();

    context.status = 204;
    context.body = null;
});

export default router.routes();