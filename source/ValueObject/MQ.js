const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for MQ (Martinique)
 *
 * @class RegionMQ
 * @extends {SEPARegion}
 */
class RegionMQ extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof MQ
	 */
	static get iso3166() {
		return 'MQ';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof MQ
	 */
	static get iso13616() {
		return 'FR';
	}
}

module.exports = RegionMQ;
