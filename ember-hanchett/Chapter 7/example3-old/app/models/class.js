import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  instructor: DS.belongsTo('instructor')
});
