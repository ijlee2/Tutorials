import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import config from './config/app';
import errorMiddleware from './errors/middleware';
import getAttributes from './middleware/get-attributes';
import db from './models/index';
import serialize from './resources/index';
import router from './routes/index';

/*
    Create a Koa app instance
*/
const app = new Koa();


/*
    Add database object to the Koa app instance so that we can create
    a reference in any route or middleware by typing `context.app.db`.
*/
app.db = db;


/*
    Add serialize methods to the Koa app instance
*/
app.serialize = serialize;


/*
    Handle errors in our application
*/
app.use(errorMiddleware);


/*
    Add logger, CORS, and body parser middlewares
*/
app.use(logger());
app.use(cors());
app.use(bodyParser());


/*
    Add our getAttributes middleware (needs to come after bodyParser
    since it needs the JSON data created by bodyParser)
*/
app.use(getAttributes);


/*
    Add routes
*/
// Catch errors when the HTTP method is not valid
app.use(router.allowedMethods());

// Pass all routes that we have defined above
app.use(router.routes());


/*
    Start our Koa server. Listen to requests from port 3000.
*/
app.listen(config.port, () => {
    console.log(`Started server on port ${config.port}`);
});