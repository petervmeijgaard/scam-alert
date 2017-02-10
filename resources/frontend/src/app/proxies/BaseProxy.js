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
   * @param {string} url The URL for the request.
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

  get(endpoint) {
    return this.submit('get', endpoint);
  }

  /**
   * Method used to fetch a single item from the API.
   *
   * @param {int}    id         The given identifier.
   * @param {Object} parameters The given parameters for the request.
   *
   * @returns {Promise} The result in a promise.
   */
  find(id, parameters = {}) {
    const query = this.getParameterString(parameters);

    return this.get(`/${this.endpoint}/${id}${query}`);
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @param {Object} parameters The given parameters for the request.
   *
   * @returns {Promise} The result in a promise.
   */
  all(parameters = {}) {
    const query = this.getParameterString(parameters);

    return this.get(`/${this.endpoint}${query}`);
  }

  /**
   * Method used to transform a parameters object to a parameters string.
   *
   * @param {Object} parameters The given parameters in an object.
   *
   * @returns {string} The parameter string.
   */
  getParameterString(parameters) {
    const keys = Object.keys(parameters);

    const parameterStrings = keys
      .filter(key => parameters[key] !== null)
      .map(key => `${key}=${parameters[key]}`);

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`;
  }
}

export default BaseProxy;
