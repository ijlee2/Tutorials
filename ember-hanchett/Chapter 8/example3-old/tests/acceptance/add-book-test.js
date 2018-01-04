import { test } from 'qunit';
import moduleForAcceptance from 'example3/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add book');

test('visiting / and adding book', function(assert) {
  visit('/');
  fillIn('input','My new book');
  click('button');
  andThen(function() {
    assert.equal(currentURL(), '/');
	assert.equal(find('li:last').text(),'My new book');

  });

});
