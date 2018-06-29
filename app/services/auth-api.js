import Service from '@ember/service';

export default Service.extend({
  register() {
    return this._fakeRequestAsync();
  },

  login() {
    return this._fakeRequestAsync();
  },

  _fakeRequestAsync(message) {
    const randomSuccess = Math.round(Math.random());

    return new Promise((resolve, reject) => {
      if (!randomSuccess) {
        return setTimeout(() => reject(), 1000);
      }

      return setTimeout(() => resolve(), 1000);
    });
  }
});
