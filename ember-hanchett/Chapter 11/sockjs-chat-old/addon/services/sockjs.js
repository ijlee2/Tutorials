/* global SockJS */
import Ember from 'ember';
var {run} = Ember;

export default Ember.Service.extend(Ember.Evented,{
	socket: null,
	setupSockjs(url) {
		let socket = new SockJS(url);
		socket.addEventListener('message', run.bind(this, (event)=> {
			this.trigger('messageReceived', event.data);
			console.log(event.data);
		}));
		this.set('socket',socket);
	},
	   sendInfo(message) {
		   let socket= this.get('socket');
		   if(socket != null){
			   socket.send(message);
		   }
	   }

});

