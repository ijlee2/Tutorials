import EmberObject from '@ember/object';
import CommonMixin from 'example5/mixins/common';
import { module, test } from 'qunit';

module('Unit | Mixin | common');

// Replace this with your real tests.
test('it works', function(assert) {
  let CommonObject = EmberObject.extend(CommonMixin);
  let subject = CommonObject.create();
  assert.ok(subject);
});
