import Vue from 'vue';

class BaseProxy {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  onFail() {
    //
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string} requestType The request type.
   *
   * @param {String} url The URL for the request.
   *
   * @returns {Promise} The result in a promise.
   */
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

  /**
   * Method used to fetch a single item from the API.
   *
   * @param {int} id The given identifier.
   *
   * @returns {Promise} The result in a promise.
   */
  find(id) {
    return this.submit('get', `/${this.endpoint}/${id}`);
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @returns {Promise} The result in a promise.
   */
  all() {
    return this.submit('get', `/${this.endpoint}`);
  }
}

export default BaseProxy;
