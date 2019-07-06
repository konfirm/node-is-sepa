/* global source, describe, it, each, expect */

const HU = source('ValueObject/HU');
const { match, HU: RegionHU } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('HU (Hungary)', () => {
		describe('package', () => {
			it('HU is exported', (next) => {
				expect(RegionHU).to.equal(HU);
	
				next();
			});
	
			each`
				input
				------
				HU
				hu
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(HU);
	
				next();
			});
		});

		it('has iso3166 HU', (next) => {
			expect(HU.iso3166).to.equal('HU');

			next();
		});

		it('has iso13616 HU', (next) => {
			expect(HU.iso13616).to.equal('HU');

			next();
		});

		it('has 0 regions', (next) => {
			expect(HU.regions).to.be.array();
			expect(HU.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = HU;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
