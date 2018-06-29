import Mixin from '@ember/object/mixin';
import {inject as service} from '@ember/service';

/**
 * Abstracted AuthFormMixin is responsible to keep reusable behaviors
 */
export default Mixin.create({
  /**
   * Ember's store service
   */
  store: service('store'),

  /**
   * Validation state
   */
  valid: false,

  /**
   * Requesting state
   */
  pending: false,

  /**
   * Disabling state
   */
  disabled: false,

  /**
   * Message status
   */
  formMessage: '',

  /**
   * Mixin's constructor
   */
  init: function() {
    this._super();
  },

  /**
   * The method is triggered before the submitting form event
   */
  beforeSubmitForm() {
    // clears current model errors
    this.get('model').clearErrors();
    // switches on pending state
    this.set('pending', true);
  },

  /**
   * The method is triggered when a server returns response
   */
  afterSubmitForm() {
    // switches off pending state
    this.set('pending', false);
  },

  /**
   * The method is triggered when a server returns successful response
   * @param {string} message
   */
  onSubmitSuccessResponse(message) {
    // prepares the form for new use
    this.afterSubmitForm();
    // shows the form success message
    this.showFormMessage(message);
  },

  /**
   * The method is triggered when a server returns failed response
   * @param {string} message
   */
  onSubmitFailureResponse(message) {
    // prepares the form for new use
    this.afterSubmitForm();
    // shows the form failure message
    this.showFormMessage(message);
  },

  /**
   * The method is triggered when the submit button is clicked
   */
  onSubmitForm() {
    // validates current form
    const valid = this.validateForm();
    // sets current validation state
    this.set('valid', valid);

    // checks if the form can be sumbitted
    if (this.canSubmit()){
      this.beforeSubmitForm();
      // triggers the method that is implemented by concrete component
      this.submitForm();
    }
  },

  /**
   * The method is triggered when the cancel button is clicked
   */
  onCancelForm() {
    // clears current form message
    this.set('formMessage', '');
    // creates and resets new model to flush current form data
    this.createFormModel();
  },

  /**
   * The method is trigerred when the form is valid
   * Not implemented
   */
  submitForm() {
    return null;
  },

  /**
   * The method is responsible to create the concrete model of the concrete component
   * Not implemented
   */
  createFormModel(data = {}) {
    return null;
  },

  /**
   * The method validates the form model
   * @returns {bolean}
   */
  validateForm() {
    return this.get('model').validate();
  },

  /**
   * The method outputs a message of the form
   * @param {string} message
   */
  showFormMessage(message) {
    this.set('formMessage', message);
  },

  /**
   * The method checks whether the form can be submitted
   * @returns {bolean}
   */
  canSubmit() {
    const valid = this.get('valid');
    const pending = this.get('pending');
    const disabled = this.get('disabled');

    return valid
      && !pending
      && !disabled;
  },

  /**
   * Keeps the actions that are trigerred in the template
   */
  actions: {
    submit() {
      this.onSubmitForm();
    },

    cancel() {
      this.onCancelForm();
    }
  }
});
