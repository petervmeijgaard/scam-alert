import Vue from 'vue';

class BaseProxy {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  onFail(data) {
    alert('Oops, something went wrong: ', data);
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      Vue.$http[requestType](url)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((response) => {
          this.onFail(response);

          reject(response);
        });
    });
  }

  find(id) {
    return this.submit('get', `/${this.endpoint}/${id}`);
  }

  all() {
    return this.submit('get', `/${this.endpoint}`);
  }
}

export default BaseProxy;
