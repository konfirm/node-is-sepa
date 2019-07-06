const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for AT (Austria)
 *
 * @class RegionAT
 * @extends {SEPARegion}
 */
class RegionAT extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof AT
	 */
	static get iso3166() {
		return 'AT';
	}
}

module.exports = RegionAT;
