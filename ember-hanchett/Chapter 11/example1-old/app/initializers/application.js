/* global moment */
import Ember from 'ember';

export function initialize( application) {
	let MyLogger = Ember.Object.extend({
		log(info){
			let time = moment().format();
			Ember.Logger.debug(`(${time}):`,info);
		}
	});
   application.register('myLogger:zzz', MyLogger);
   application.inject('controller','myLogger','myLogger:zzz');
}

export default {
  name: 'application',
  initialize
};
