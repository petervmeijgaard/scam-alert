/* ============
 * Facebook Scammer Transformer
 * ============
 *
 * The transformer for a Facebook scammer.
 */

import Transformer from './BaseTransformer';
import FacebookScammer from './../models/FacebookScammer';

class FacebookScammerTransformer extends Transformer {
  /**
   * Method used to transform a fetched Facebook scammer.
   *
   * @param {Object} facebookScammer The fetched Facebook scammer.
   *
   * @returns {FacebookScammer} A Facebook scammer model.
   */
  static fetch(facebookScammer) {
    return new FacebookScammer({
      id: facebookScammer.id,
      facebookId: facebookScammer.facebook_id,
      firstName: facebookScammer.first_name,
      lastName: facebookScammer.last_name,
    });
  }

  /**
   * Method used to transform a send Facebook scammer.
   *
   * @param {FacebookScammer} facebookScammer The Facebook scammer to be send
   *
   * @returns {Object} The transformed Facebook scammer.
   */
  static send(facebookScammer) {
    return {
      id: facebookScammer.id,
      facebook_id: facebookScammer.facebookId,
      first_name: facebookScammer.firstName,
      last_name: facebookScammer.lastName,
    };
  }
}

export default FacebookScammerTransformer;
