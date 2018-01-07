import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('post');
	},
	actions:{
		login(){
			this.get('session').open('firebase', { provider: 'twitter'}).then((data)=> {
			      });
		},
		logout(){
			this.get('session').close();
		}	   
	}
});
