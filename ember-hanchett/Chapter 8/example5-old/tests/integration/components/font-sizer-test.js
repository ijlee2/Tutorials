import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('font-sizer', 'Integration | Component | font sizer', {
  integration: true
});

test('check attributes', function(assert) {
  
  this.render(hbs`{{font-sizer size=val}}`);
  this.set('val','38px');
  assert.equal(this.$('div').attr('style'), 'font-size: 38px', 'size is set to 38px');

});
test('check action', function(assert) {
  
  assert.expect(2);
  this.render(hbs`{{font-sizer}}`);
  assert.equal(this.$('#info').text(), 'Hello World', 'starting text is hello world');
  this.$('button').click();
  assert.equal(this.$('#info').text(), 'Hi', 'text changed to hi');

});
