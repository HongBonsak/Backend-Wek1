import { Duration } from "./Duration.js";
/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * The participant ID.
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * The sport type.
   * @type {string}
   * @private
   */
  _sport;

  /**
   * The race duration.
   * @type {Duration}
   * @private
   */
  _duration;

  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The participant ID.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The race duration.
   */
  constructor(participantId, sport, duration) {
    this._participantId = participantId;
    this._sport = sport;
    this._duration = duration;
  }

  /**
   * Gets the participant ID.
   * @returns {string} The participant ID.
   */
  get participantId() {
    return this._participantId;
  }

  /**
   * Gets the sport type.
   * @returns {string} The sport type.
   */
  get sport() {
    return this._sport;
  }

  /**
   * Gets the race duration.
   * @returns {Duration} The race duration.
   */
  get duration() {
    return this._duration;
  }
}