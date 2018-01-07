import Ember from 'ember';
const {$} = Ember;

export default Ember.Component.extend({  
	message: '',

	   init(){
		   this._super(...arguments);
		   this.sockjs.on('messageReceived',this, 'messageReceived');
	   },
	   messageReceived(message){
		   $('#chat-content').val((i, text)=>
			    `${text}${message}\n`
		   );
		   this.set('message',message);
	   },
	   actions: {
		   enter(info,username) {
			  this.sockjs.sendInfo(`${username}: ${info}`);	

		   }
	   }

});
