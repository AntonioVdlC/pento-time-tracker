import isObject from 'is-obj';

const store = {
  init: () => {
    if (localStorage.getItem('sessions') == null) {
      localStorage.setItem('sessions', JSON.stringify([]));
    }
  },

  get: key => {
    let value, error;

    try {
      value = JSON.parse(localStorage.getItem(key));
    } catch (err) {
      error = err;
    }

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  },

  post: (key, data) => {
    let value, error;

    try {
      localStorage.setItem(key, JSON.stringify(data));
      value = data;
    } catch (err) {
      error = err;
    }

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  },

  put: async (key, val) => {
    let value, error;

    try {
      // First retrieve the existing data to update it!
      let data = await store.get(key);

      if (Array.isArray(data)) {
        // We are storing an array, so let's just push the new value
        // into it.
        data.push(val);
      } else if (isObject(data)) {
        // We are storing an object, so let's merge it with the new value
        data = { ...data, ...val };
      } else {
        // We are storing a primitive value, so let's just replace it? 🤷🏾‍♂️
        // This should be a POST though ... 😅
        data = val;
      }

      // Save the updated data
      value = await store.post(key, data);
    } catch (err) {
      error = err;
    }

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  },

  delete: key => {
    let value, error;

    try {
      localStorage.removeItem(key);
      value = true;
    } catch (err) {
      error = err;
    }

    return new Promise((resolve, reject) => {
      value != null ? resolve(value) : reject(error);
    });
  }
};

export default store;
