/* global source, describe, it, each, expect */

const BL = source('ValueObject/BL');
const { match, BL: RegionBL } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('BL (Saint Barthélemy)', () => {
		describe('package', () => {
			it('BL is not exported', (next) => {
				expect(RegionBL).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				BL
				bl
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(BL);
	
				next();
			});
		});

		it('has iso3166 BL', (next) => {
			expect(BL.iso3166).to.equal('BL');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(BL.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(BL.regions).to.be.array();
			expect(BL.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = BL;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
