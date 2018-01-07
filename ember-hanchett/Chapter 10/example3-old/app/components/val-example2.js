import Ember from 'ember';
import Validations from './validations';

export default Ember.Component.extend(Validations,{
	num: null,
	   email: null,
	   message: '',
	   emailMessage: '',
	   actions: {
		   check(){
			   this.set('message','');
			   this.set('emailMessage','');
			   this.validate().then(({model, validations})=>{

				   if(validations.get('isValid')){
					   this.set('message','');
					   this.set('emailMessage','');
				   }
				   else{

					   if(model.get('validations.attrs.num.isInvalid')){
						   this.set('message',model.get('validations.attrs.num.messages'));
					   }
					   if(model.get('validations.attrs.email.isInvalid')){
						   this.set('emailMessage',model.get('validations.attrs.email.messages'));
					   }
				   }

			   },(errors)=>{
				   console.log(errors);
			   });




		   }
	   }
});
