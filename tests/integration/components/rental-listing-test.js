import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | rental-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.rental = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      owner: 'test-owner',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    })
  })

  test('sould display rentals', async function(assert) {
    await render(hbs`<RentalListing @rental={{this.rental}}></RentalListing>`);
    const titleEl = this.element.querySelector('[data-testid="title"]') 
    const ownerEl = this.element.querySelector('[data-testid="owner"]') 

    assert.ok(titleEl.textContent.includes('test-title'));
    assert.ok(ownerEl.textContent.includes('test-owner'));
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`<RentalListing @rental={{this.rental}}></RentalListing>`);

    const imageEl = this.element.querySelector('[data-testid="image"]');
    assert.notOk(imageEl.classList.contains('wide'), 'initially rendered small');
    await click('.image');
    assert.ok(imageEl.classList.contains('wide'), 'rendered wide after click');
    await click('.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
  });
});
