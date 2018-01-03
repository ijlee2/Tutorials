import EmberObject from '@ember/object';
import SecondMixinMixin from 'example5/mixins/second-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | second mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecondMixinObject = EmberObject.extend(SecondMixinMixin);
  let subject = SecondMixinObject.create();
  assert.ok(subject);
});
