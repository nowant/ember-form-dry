import Component from '@ember/component';
import {inject as service} from '@ember/service';
import AuthFormMixin from '../mixins/auth-form';

export default Component.extend(AuthFormMixin, {
  /**
   * Mocked api service
   */
  api: null,

  /**
   * The action is triggered on the fom submit
   */
  submitAction: null,

  /**
   * Form's model
   */
  model: null,

  /**
   * Form's title
   */
  formTitle: '',

  /**
   * Form's success message
   */
  formSuccessMessage: '',

  /**
   * Form's failed message
   */
  formFailedMessage: '',

  /**
   * Submit button text
   */
  submitButton: '',

  /**
   * Cancel button text
   */
  cancelButton: '',

  /**
   * The method contains the concrete submitting form logic for the component
   */
  submitForm() {
    this._executeSubmitAction()
      .then(
        () => this.onSubmitSuccessResponse(this.formSuccessMessage)
      )
      .catch(
        () => this.onSubmitFailureResponse(this.formFailedMessage)
      );
  },

  /**
   * The method dispatches the cancel event for parent component
   */
  cancelForm() {
    this.sendAction("onCancel", null);
  },

  /**
   * Executes the submit action from the api
   */
  _executeSubmitAction() {
    const action = this.get('submitAction');

    if (this.api && this.api[action]) {
      return this.api[action].call(this.api);
    }

    return Promise.reject();
  }
});
