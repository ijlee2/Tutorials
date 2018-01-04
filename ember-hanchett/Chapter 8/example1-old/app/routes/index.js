import Ember from 'ember';
const {Logger}= Ember;

export default Ember.Route.extend({
	model(){
		Logger.log('log');
		Logger.info('info','more stuff');
		Logger.error('error');
		Logger.debug('debug');
		Logger.warn('warn');
		Logger.assert(true === false);
		return {};
	}
});
