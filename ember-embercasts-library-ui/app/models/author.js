import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class Author extends Model {
    @attr('string') firstName;
    @attr('string') lastName;

    @hasMany('book') books;
}