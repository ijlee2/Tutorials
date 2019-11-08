import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class BookModel extends Model {
    @attr('string') title;
    @attr('string') isbn;
    @attr() publicationDate;

    @belongsTo('author') author;
}