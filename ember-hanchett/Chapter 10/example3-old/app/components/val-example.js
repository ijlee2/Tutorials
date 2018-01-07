import Ember from 'ember';

export default Ember.Component.extend({
	num: null,
	actions:{
		check(){
			if(this.validation(this.get('num'))){
				this.set('error','');
			}
			else{
				this.set('error','Error in box!');
			}

			console.log(this.getProperties('num'));
		}
	},
	validation(value){
		return Number(parseInt(value))==value;
	}

});
