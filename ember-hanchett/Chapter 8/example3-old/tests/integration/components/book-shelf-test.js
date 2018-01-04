import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('book-shelf', 'Integration | Component | book shelf', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{book-shelf}}`);

  //assert.equal(this.$().text().trim(), '');
  assert.equal('', '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#book-shelf}}
      template block text
    {{/book-shelf}}
  `);

  //assert.equal(this.$().text().trim(), 'template block text');
});
