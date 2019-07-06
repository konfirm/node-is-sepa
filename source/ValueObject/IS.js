const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for IS (Iceland)
 *
 * @class RegionIS
 * @extends {SEPARegion}
 */
class RegionIS extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof IS
	 */
	static get iso3166() {
		return 'IS';
	}
}

module.exports = RegionIS;
