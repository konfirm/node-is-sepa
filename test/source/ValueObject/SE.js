/* global source, describe, it, each, expect */

const SE = source('ValueObject/SE');
const { match, SE: RegionSE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('SE (Sweden)', () => {
		describe('package', () => {
			it('SE is exported', (next) => {
				expect(RegionSE).to.equal(SE);
	
				next();
			});
	
			each`
				input
				------
				SE
				se
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(SE);
	
				next();
			});
		});

		it('has iso3166 SE', (next) => {
			expect(SE.iso3166).to.equal('SE');

			next();
		});

		it('has iso13616 SE', (next) => {
			expect(SE.iso13616).to.equal('SE');

			next();
		});

		it('has 0 regions', (next) => {
			expect(SE.regions).to.be.array();
			expect(SE.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = SE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
