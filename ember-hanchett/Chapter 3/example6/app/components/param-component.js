import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pressed(text){
      alert(text);
    }
  }
});
