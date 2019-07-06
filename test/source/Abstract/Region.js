/* global source, describe, it, each, expect */

const Region = source('Abstract/Region');

describe('Region', () => {
	it('implements members', (next) => {
		expect('iso3166' in Region).to.be.true();
		expect('iso13616' in Region).to.be.true();
		expect('regions' in Region).to.be.true();
		expect('since' in Region).to.be.true();

		next();
	});

	describe('different iso3166 and iso13616 values match', () => {
		class Difference extends Region {
			static get iso3166() {
				return 'QQ';
			}
			static get iso13616() {
				return 'ZZ';
			}
		}

		it('does not match AA', (next) => {
			expect('AA'.match(Difference)).to.equal(undefined);

			next();
		});

		it('matches QQ', (next) => {
			expect('QQ'.match(Difference)).to.equal(Difference);

			next();
		});

		it('matches ZZ', (next) => {
			expect('ZZ'.match(Difference)).to.equal(Difference);

			next();
		});
	});
});
