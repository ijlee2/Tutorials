import Ember from 'ember';

export default Ember.Component.extend({
	  classNames: ['draggable-dropzone'],
	     classNameBindings: ['dragClass'],
	     dragClass: 'deactivated',
	     dragLeave(event) {
		     event.preventDefault();
		     return this.set('dragClass', 'deactivated');
		   },
	     dragOver(event) {
		     event.preventDefault();
		     return this.set('dragClass', 'activated');
		   },
	     drop(event) {
		     var data;
		     this.set('dragClass', 'deactivated');
		     data = event.dataTransfer.getData('text/data');
			 event.target.appendChild(document.getElementById(data));
		   }

});
