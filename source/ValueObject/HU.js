const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for HU (Hungary)
 *
 * @class RegionHU
 * @extends {SEPARegion}
 */
class RegionHU extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof HU
	 */
	static get iso3166() {
		return 'HU';
	}
}

module.exports = RegionHU;
