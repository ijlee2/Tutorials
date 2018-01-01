import Ember from 'ember';

export default Ember.Component.extend({
  showText: true,
  actions: {
    toggleText(){
      this.toggleProperty('showText');
    }
  }

});
