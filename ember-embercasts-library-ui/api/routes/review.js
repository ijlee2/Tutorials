import Router from 'koa-router';
import Sequelize from 'sequelize';

const router = new Router();

router.get('/', async (context) => {
    const reviews = await context.app.db.Review.findAll();

    context.body = context.app.serialize('review', reviews);
});

router.get('/:id', async (context) => {
    const { id } = context.params;
    const review = await context.app.db.Review.findOrFail(id);

    context.body = context.app.serialize('review', review);
});

router.get('/:id/book', async (context) => {
    const { id } = context.params;
    const review = await context.app.db.Review.findOrFail(id);

    const book = await review.getBook();

    context.body = context.app.serialize('book', book);
});

router.post('/', async (context) => {
    const attributes = context.getAttributes();
    const review = await context.app.db.Review.create(attributes);

    context.status = 201;
    context.set('Location', `/reviews/${review.id}`);

    context.body = context.app.serialize('review', review);
});

router.patch('/:id', async (context) => {
    const { id } = context.params;
    const review = await context.app.db.Review.findOrFail(id);

    const attributes = context.getAttributes();
    review.set(attributes);

    await review.save();

    context.body = context.app.serialize('review', review);
});

router.del('/:id', async (context) => {
    const { id } = context.params;
    const review = await context.app.db.Review.findOrFail(id);

    await review.destroy();

    context.status = 204;
    context.body = null;
});

export default router.routes();