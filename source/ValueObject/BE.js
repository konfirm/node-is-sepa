const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for BE (Belgium)
 *
 * @class RegionBE
 * @extends {SEPARegion}
 */
class RegionBE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof BE
	 */
	static get iso3166() {
		return 'BE';
	}
}

module.exports = RegionBE;
