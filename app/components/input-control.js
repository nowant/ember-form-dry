import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['type'],
  type: 'text',
  value: null,
  errors: [],
});
