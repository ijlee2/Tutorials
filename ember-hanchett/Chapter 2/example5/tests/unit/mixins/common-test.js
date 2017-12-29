import Ember from 'ember';
import CommonMixin from '../../../mixins/common';
import { module, test } from 'qunit';

module('Unit | Mixin | common');

// Replace this with your real tests.
test('it works', function(assert) {
  var CommonObject = Ember.Object.extend(CommonMixin);
  var subject = CommonObject.create();
  assert.ok(subject);
});
