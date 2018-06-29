import DS from 'ember-data';
import ModelValidator from 'ember-model-validator/mixins/model-validator';

export default DS.Model.extend(ModelValidator, {
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),

  validations: {
    firstName: {
      presence: true
    },
    lastName: {
      presence: true
    },
    username: {
      presence: true
    },
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      length: {
        minimum: 6
      }
    },
    passwordConfirmation: {
      presence: true,
      match: 'password'
    }
  }
});
