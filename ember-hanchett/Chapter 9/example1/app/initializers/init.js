export function initialize(application) {
    // application is an Ember.Application
    application.inject("component", "start", "service:start");
}

export default {
    initialize
};
