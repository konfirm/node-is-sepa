const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for RO (Romania)
 *
 * @class RegionRO
 * @extends {SEPARegion}
 */
class RegionRO extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof RO
	 */
	static get iso3166() {
		return 'RO';
	}
}

module.exports = RegionRO;
