/* global source, describe, it, each, expect */

const GF = source('ValueObject/GF');
const { match, GF: RegionGF } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('GF (French Guiana)', () => {
		describe('package', () => {
			it('GF is not exported', (next) => {
				expect(RegionGF).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				GF
				gf
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(GF);
	
				next();
			});
		});

		it('has iso3166 GF', (next) => {
			expect(GF.iso3166).to.equal('GF');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(GF.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(GF.regions).to.be.array();
			expect(GF.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = GF;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
