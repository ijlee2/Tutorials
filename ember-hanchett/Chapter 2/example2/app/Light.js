import Ember from 'ember';
export default Ember.Object.extend( {
  isOn: false,
  color: 'yellow',
  age: null,
  description: Ember.computed('isOn','color',function() {
    return 'The ' + this.get('color') + ' light is set to ' + this.get('isOn');
  }),
  fullDescription: Ember.computed('description','age',function() {
    return this.get('description') + ' and the age is ' + this.get('age');
  }),
  aliasDescription: Ember.computed.alias('fullDescription')
});

