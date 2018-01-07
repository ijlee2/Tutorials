import Ember from 'ember';

export default Ember.Component.extend({
	websockets: Ember.inject.service(),
	socket: null,
	init() {
		this._super();
		let socket = this.get('websockets').socketFor('ws://localhost:7000/');
		this.set('socket',socket);
		socket.on('open', this.myOpenHandler, this);
		socket.on('message', this.myMessageHandler, this);
		socket.on('close', (event)=> {
			console.log('closed');
		}, this);
	},
	   message: '',

	   myOpenHandler(event) {
		   console.log('On open event has been called: ' + event);
	   },

	   myMessageHandler(event) {
		   console.log('Message: ' + event.data);
		   this.set('message',event.data);
	   },

	   actions: {
		   sendButtonPressed() {
			   this.get('socket').send('Hello Websocket World');
		   }
	   }
});
