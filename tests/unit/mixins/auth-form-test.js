import EmberObject from '@ember/object';
import AuthFormMixin from 'ember-dry/mixins/auth-form';
import { module, test } from 'qunit';

module('Unit | Mixin | auth-form', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let AuthFormObject = EmberObject.extend(AuthFormMixin);
    let subject = AuthFormObject.create();
    assert.ok(subject);
  });
});
