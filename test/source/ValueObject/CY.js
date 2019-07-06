/* global source, describe, it, each, expect */

const CY = source('ValueObject/CY');
const { match, CY: RegionCY } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('CY (Cyprus)', () => {
		describe('package', () => {
			it('CY is exported', (next) => {
				expect(RegionCY).to.equal(CY);
	
				next();
			});
	
			each`
				input
				------
				CY
				cy
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(CY);
	
				next();
			});
		});

		it('has iso3166 CY', (next) => {
			expect(CY.iso3166).to.equal('CY');

			next();
		});

		it('has iso13616 CY', (next) => {
			expect(CY.iso13616).to.equal('CY');

			next();
		});

		it('has 0 regions', (next) => {
			expect(CY.regions).to.be.array();
			expect(CY.regions).to.have.length(0);

			next();
		});

		it('has since 2008-01-01', (next) => {
			const { since } = CY;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2008-01-01');

			next();
		});
	});
});
