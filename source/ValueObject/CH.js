const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for CH (Switzerland)
 *
 * @class RegionCH
 * @extends {SEPARegion}
 */
class RegionCH extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof CH
	 */
	static get iso3166() {
		return 'CH';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof CH
	 */
	static get since() {
		//  The UTC representation of 2006-03-01
		return new Date(Date.UTC(2006, 2, 1));
	}
}

module.exports = RegionCH;
