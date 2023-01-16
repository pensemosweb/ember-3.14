import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function (hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically')
  });

  test('should list available rentals.', async function (assert) {
    await visit('/');
    const items = this.element.querySelectorAll('[data-testid="list-item"]');
    assert.equal(items.length, 3, 'should display 3 items')
  });
});
