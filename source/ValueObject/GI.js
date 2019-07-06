const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for GI (Gibraltar)
 *
 * @class RegionGI
 * @extends {SEPARegion}
 */
class RegionGI extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof GI
	 */
	static get iso3166() {
		return 'GI';
	}
}

module.exports = RegionGI;
