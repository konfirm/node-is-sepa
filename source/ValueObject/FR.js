const SEPARegion = require('../Abstract/Region.js');

const RegionGF = require('./GF.js')
const RegionGP = require('./GP.js')
const RegionMQ = require('./MQ.js')
const RegionYT = require('./YT.js')
const RegionRE = require('./RE.js')
const RegionBL = require('./BL.js')
const RegionMF = require('./MF.js')
const RegionPM = require('./PM.js')


/**
 * SEPARegion ValueObject for FR (France)
 *
 * @class RegionFR
 * @extends {SEPARegion}
 */
class RegionFR extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof FR
	 */
	static get iso3166() {
		return 'FR';
	}

	/**
	 * List of subdivisions (if any) which are included in SEPA
	 *
	 * @readonly
	 * @static
	 * @memberof FR
	 */
	static get regions() {
		return [RegionGF, RegionGP, RegionMQ, RegionYT, RegionRE, RegionBL, RegionMF, RegionPM];
	}
}

module.exports = RegionFR;
