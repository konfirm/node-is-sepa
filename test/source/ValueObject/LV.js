/* global source, describe, it, each, expect */

const LV = source('ValueObject/LV');
const { match, LV: RegionLV } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('LV (Latvia)', () => {
		describe('package', () => {
			it('LV is exported', (next) => {
				expect(RegionLV).to.equal(LV);
	
				next();
			});
	
			each`
				input
				------
				LV
				lv
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(LV);
	
				next();
			});
		});

		it('has iso3166 LV', (next) => {
			expect(LV.iso3166).to.equal('LV');

			next();
		});

		it('has iso13616 LV', (next) => {
			expect(LV.iso13616).to.equal('LV');

			next();
		});

		it('has 0 regions', (next) => {
			expect(LV.regions).to.be.array();
			expect(LV.regions).to.have.length(0);

			next();
		});

		it('has since 2015-01-01', (next) => {
			const { since } = LV;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2015-01-01');

			next();
		});
	});
});
