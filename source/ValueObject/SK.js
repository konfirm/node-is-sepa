const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for SK (Slovakia)
 *
 * @class RegionSK
 * @extends {SEPARegion}
 */
class RegionSK extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof SK
	 */
	static get iso3166() {
		return 'SK';
	}
}

module.exports = RegionSK;
