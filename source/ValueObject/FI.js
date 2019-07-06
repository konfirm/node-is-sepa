const SEPARegion = require('../Abstract/Region.js');

const RegionAX = require('./AX.js')


/**
 * SEPARegion ValueObject for FI (Finland)
 *
 * @class RegionFI
 * @extends {SEPARegion}
 */
class RegionFI extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof FI
	 */
	static get iso3166() {
		return 'FI';
	}

	/**
	 * List of subdivisions (if any) which are included in SEPA
	 *
	 * @readonly
	 * @static
	 * @memberof FI
	 */
	static get regions() {
		return [RegionAX];
	}
}

module.exports = RegionFI;
