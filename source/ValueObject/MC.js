const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for MC (Monaco)
 *
 * @class RegionMC
 * @extends {SEPARegion}
 */
class RegionMC extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof MC
	 */
	static get iso3166() {
		return 'MC';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof MC
	 */
	static get since() {
		//  The UTC representation of 2009-03-01
		return new Date(Date.UTC(2009, 2, 1));
	}
}

module.exports = RegionMC;
