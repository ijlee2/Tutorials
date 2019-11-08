import NotFoundError from './not-found';

export default async (context, next) => {
    try {
        // Continue running the middleware in our application,
        // unless an error occurs that's not caught somewhere
        // in our stack.
        await next();

    } catch (e) {
        switch (e.constructor) {
            case NotFoundError: {
                context.status = 404;

                return context.body = {
                    errors: [
                        {
                            code: 404,
                            title: 'Not Found',
                            detail: `${e.modelName} not found with the id '${e.id}'`
                        }
                    ]
                };
            }

            default: {
                context.status = 500;

                return context.body = {
                    errors: [
                        {
                            code: 500,
                            title: 'Internal Server Error',
                            detail: e.message
                        }
                    ]
                };
            }
        }
    }
};