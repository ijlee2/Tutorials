import Ember from 'ember';
import layout from '../templates/components/sockjs-chat';
const {typeOf}= Ember;

export default Ember.Component.extend({

	sockjs: Ember.inject.service('sockjs'),
	   layout,
	   message:'',

	   init() {
		   this._super(...arguments);
		   this.get('sockjs').setupSockjs(this.attrs.url);
		   this.get('sockjs').on('messageReceived',this,(message)=>{
			   this.set('message',message);
			   this._actionHandler('receiveAction',message);
		   });
	   },           
	   _actionHandler(actionName, ...args) {

		   if(this.attrs && typeOf(this.attrs[actionName]) === 'function'){
			   this.attrs[actionName](...args);
		   } else {
			   this.sendAction(actionName,...args);
		   }
	   },

	   actions: {              
		   enter(info,username) {
			   this._actionHandler('sendAction',info,username);

		   }                   
	   }                       

});
