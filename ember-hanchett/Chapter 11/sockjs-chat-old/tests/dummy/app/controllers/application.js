import Ember from 'ember';
const {$} = Ember;

export default Ember.Controller.extend({
	sockjs: Ember.inject.service('sockjs'),
	actions:{
		receiveMessage(message){
			$('#chat-content').val((i, text)=>
				`${text}${message}\n`
			);
			this.set('message',message);

		},
	   sendMessage(message, username){
		   console.log(username);
		   console.log(message);
		   var send = this.get('sockjs');
		   send.sendInfo(`${username}: ${message}`);

	   }
	}
});

