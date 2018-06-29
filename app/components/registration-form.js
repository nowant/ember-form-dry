import Component from '@ember/component';
import {inject as service} from '@ember/service';
import AuthFormMixin from '../mixins/auth-form';

export default Component.extend(AuthFormMixin, {
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
   * The method contains the concrete submitting form logic for the component
   */
  submitForm() {
    this.api.register()
      .then(
        () => this.onSubmitSuccessResponse('Registration is succeeded!')
      )
      .catch(
        () => this.onSubmitFailureResponse('Server error! Registration is failed! Please retry later...')
      );
  },

  /**
   * The method creates and sets the concrete model for the component
   */
  createFormModel(data = {}) {
    const model = this.get('store').createRecord('registration', data);
    this.set('model', model);
  }
});
