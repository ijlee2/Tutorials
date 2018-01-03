import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api/v1',
	//host: ‘https://api.example.com’
	//headers: {
    //		‘API_INFO:’: ‘key’,
    //	   ‘SECOND_HEADER’: ‘Some value’
    //	}

});
