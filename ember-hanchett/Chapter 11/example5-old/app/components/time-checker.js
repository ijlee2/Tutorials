/* global moment */
import Ember from 'ember';

export default Ember.Component.extend({
	startTime: null,
	currentTime:null,
	init(){
		this._super(...arguments);
		this.set('startTime',moment());
		this.startWatchingTime();

	},
	   startWatchingTime(){
		   this.set('currentTime', moment());
		   Ember.run.later(()=>{
			   this.startWatchingTime();
		   }, 1000);
	   },
	   diff: Ember.computed('startTime','currentTime', function(){
		   return  this.get('currentTime').diff(this.get('startTime'),'seconds');

	   })
});
