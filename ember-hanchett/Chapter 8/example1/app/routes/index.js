import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // Do not use Ember.Logger, which had wrapped console.log in order to
        // support IE9. Future versions of Ember do not support IE9 and IE10.
        console.log('Here is a log message.');

        // Synonym for console.log
        console.info('Info:', 'more information');

        // console.debug has been deprecated. Use console.log instead.
//      console.debug('debug');
        
        // Log message is preceded by an error sign
        console.error('This is an error message.');

        // Log message is preceded by a warning sign
        console.warn('This is a warning message.');
        
        // Writes an error message if the assertion is false
        console.assert(true === false, "The statement is false.");
    }
});
