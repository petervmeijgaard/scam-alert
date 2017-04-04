/* ============
 * Scammer Model
 * ============
 *
 * The model for a scammer.
 */

import Model from './BaseModel';

class Scammer extends Model {
  /**
   * Getter for the full name.
   *
   * @returns {string} The full name.
   */
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Scammer;
