import Vue from 'vue';

class BaseProxy {
  /**
   * The constructor of the BaseProxy.
   *
   * @param {string} endpoint   The endpoint being used.
   * @param {Object} parameters The parameters for the request.
   */
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = this.getParameterString(parameters);
  }

  /**
   * Method used to set the query parameters.
   *
   * @param {Object} parameters The given parameters.
   *
   * @returns {BaseProxy} The instance of the proxy.
   */
  setParameters(parameters) {
    this.parameters = this.getParameterString(parameters);

    return this;
  }

  /**
   * The method used to perform an AJAX-request.
   *
   * @param {string} requestType The request type.
   * @param {string} url         The URL for the request.
   *
   * @returns {Promise} The result in a promise.
   */
  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      Vue.$http[requestType](url + this.parameters)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((response) => {
          reject(response);
        });
    });
  }

  /**
   * Method used to fetch all items from the API.
   *
   * @returns {Promise} The result in a promise.
   */
  all() {
    return this.submit('get', `/${this.endpoint}`);
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
