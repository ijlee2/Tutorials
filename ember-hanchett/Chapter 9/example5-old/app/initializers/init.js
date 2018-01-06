export function initialize(app) {
   app.inject('component', 'start', 'service:start');
}

export default {
  name: 'init',
  initialize
};
