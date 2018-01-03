import Ember from 'ember';

export function addone(params) {
  return +params+1;
}

export default Ember.Helper.helper(addone);
