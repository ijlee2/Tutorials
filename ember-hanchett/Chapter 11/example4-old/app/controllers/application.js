import Ember from 'ember';

export default Ember.Controller.extend({
	sockjs: Ember.inject.service('sockjs'),
	   actions:{
		   receiveMessage: function(message){
			   Ember.$('#chat-content').val(function(i, text){
				   return text + message+ '\n';
			   });
			   this.set('message',message);

		   },
	   sendMessage: function(message, username){
		   var send = this.get('sockjs');
		   send.sendInfo(username + ': ' + message);

	   }
	  }

});
