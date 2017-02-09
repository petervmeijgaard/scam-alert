/* ============
 * Facebook Scammer Model
 * ============
 *
 * The model for a Facebook scammer.
 */

import Model from './BaseModel';

class FacebookScammer extends Model {
  /**
   * Getter for the full name.
   *
   * @returns {string} The full name.
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default FacebookScammer;
