const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for PL (Poland)
 *
 * @class RegionPL
 * @extends {SEPARegion}
 */
class RegionPL extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof PL
	 */
	static get iso3166() {
		return 'PL';
	}
}

module.exports = RegionPL;
