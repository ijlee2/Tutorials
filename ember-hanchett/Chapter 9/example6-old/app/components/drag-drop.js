import Ember from 'ember';

export default Ember.Component.extend({
	  tagName: 'img',
	  classNames: ['draggable-item'],
      attributeBindings: ['draggable','src'],
      draggable: 'true',
	  src: 'http://www.programwitherik.com/content/images/2015/02/eriksmall3-1.png',
	  dragStart(event){
		  event.dataTransfer.setData('text/data', event.target.id);
	  }
});
