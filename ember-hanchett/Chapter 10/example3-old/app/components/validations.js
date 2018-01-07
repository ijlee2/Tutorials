import { validator, buildValidations } from 'ember-cp-validations';

export default buildValidations({
	num: [
	validator('number',{
		allowString: true,
		integer: true,
		message: 'Error! This is not an integer!'
	}),
	validator('presence', true)
	],
	   email: [
	validator('format', { 
		type: 'email',
	message: 'This is not an email address!'
	}),
	],
});

