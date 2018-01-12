export function initialize(application) {
    application.inject("component", "sockjs", "service:sockjs");
}

export default {
    initialize
};
