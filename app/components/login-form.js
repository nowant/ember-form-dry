import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  /**
   * Ember's store service
   */
  store: service('store'),
  /**
   * Mocked api service
   */
  api: service('auth-api'),

  /**
   * Form's model
   */
  model: null,

  /**
   * Constructor
   */
  init: function() {
    this._super();
    this.createFormModel();
  },

  /**
   * The method creates and sets the concrete model for the component
   */
  createFormModel(data = {}) {
    const model = this.get('store').createRecord('login', data);
    this.set('model', model);
  },

  /**
   * To reset the form we need to recreate the form model
   * https://github.com/emberjs/data/issues/4209
   */
  actions: {
    cancelForm() {
      this.createFormModel();
    }
  }
});
