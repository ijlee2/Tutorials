import Router from 'koa-router';

// Instead of declaring a middleware that applies to our entire app,
// declare routes that only run for certain HTTP methods and certain
// URLs.
const router = new Router();

router.get('/', async (context) => {
    // Return a JSON response with status of text "ok". Koa will
    // handle the response header, content type, and stringification
    // of JSON response for us.
    context.body = {
        status: 'ok'
    };
});

export default router.routes();


/* (Before)

app.use(async (context) => {
    // Return a JSON response with status of text "ok". Koa will
    // handle the response header, content type, and stringification
    // of JSON response for us.
    context.body = {
        status: 'ok'
    };
});
*/