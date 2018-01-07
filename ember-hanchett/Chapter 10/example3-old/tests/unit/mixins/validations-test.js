import Ember from 'ember';
import ValidationsMixin from '../../../mixins/validations';
import { module, test } from 'qunit';

module('Unit | Mixin | validations');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsObject = Ember.Object.extend(ValidationsMixin);
  let subject = ValidationsObject.create();
  assert.ok(subject);
});
