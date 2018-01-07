import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('drag-drop-zone', 'Integration | Component | drag drop zone', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{drag-drop-zone}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#drag-drop-zone}}
      template block text
    {{/drag-drop-zone}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
