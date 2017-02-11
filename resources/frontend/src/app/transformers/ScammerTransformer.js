/* ============
 * Scammer Transformer
 * ============
 *
 * The transformer for a scammer.
 */

import Transformer from './BaseTransformer';
import Scammer from './../models/Scammer';

class ScammerTransformer extends Transformer {
  /**
   * Method used to transform a fetched scammer.
   *
   * @param {Object} scammer The fetched scammer.
   *
   * @returns {Scammer} A scammer model.
   */
  static fetch(scammer) {
    return new Scammer({
      id: scammer.id,
      firstName: scammer.first_name,
      lastName: scammer.last_name,
    });
  }

  /**
   * Method used to transform a send scammer.
   *
   * @param {Scammer} scammer The scammer to be send.
   *
   * @returns {Object} The transformed scammer.
   */
  static send(scammer) {
    return {
      id: scammer.id,
      first_name: scammer.firstName,
      last_name: scammer.lastName,
    };
  }
}

export default ScammerTransformer;
