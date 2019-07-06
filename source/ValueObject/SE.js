const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for SE (Sweden)
 *
 * @class RegionSE
 * @extends {SEPARegion}
 */
class RegionSE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof SE
	 */
	static get iso3166() {
		return 'SE';
	}
}

module.exports = RegionSE;
