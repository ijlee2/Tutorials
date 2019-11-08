import { camelize, underscore } from 'inflected';
import { mapKeys, mapValues } from 'lodash';

export default async (context, next) => {
    context.getAttributes = () => {
        let { data } = context.request.body;
        let { attributes, relationships } = data;

        /*
            Convert relationship object to an ID string

            Before: attributes.AuthorId = context.request.body.data.relationships.author.data.id;
        */
        relationships = mapKeys(
            relationships,
            (value, key) => camelize(underscore(`${key}-id`))
        );
        relationships = mapValues(
            relationships,
            value => value.data.id
        );

        /*
            Convert attribute names from dasherized to camelized

            Before: attributes.publicationDate = attributes['publication-date'];
        */
        attributes = mapKeys(
            attributes,
            (value, key) => camelize(underscore(key), false)
        );

        // Order matters here
        return {
            ...relationships,
            ...attributes
        };
    }

    // Run the next middleware
    await next(context);
};