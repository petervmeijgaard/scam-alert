import Proxy from './BaseProxy';

class ScammerProxy extends Proxy {
  /**
   * The constructor for the ScammerProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor(parameters = {}) {
    super('scammers', parameters);
  }
}

export default ScammerProxy;
