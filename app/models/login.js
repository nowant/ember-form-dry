import DS from 'ember-data';
import ModelValidator from 'ember-model-validator/mixins/model-validator';

export default DS.Model.extend(ModelValidator, {
  username: DS.attr('string'),
  password: DS.attr('string'),

  validations: {
    username: {
      presence: true
    },
    password: {
      presence: true
    }
  }
});
