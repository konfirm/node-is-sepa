/* global source, describe, it, each, expect */

const GP = source('ValueObject/GP');
const { match, GP: RegionGP } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('GP (Guadeloupe)', () => {
		describe('package', () => {
			it('GP is not exported', (next) => {
				expect(RegionGP).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				GP
				gp
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(GP);
	
				next();
			});
		});

		it('has iso3166 GP', (next) => {
			expect(GP.iso3166).to.equal('GP');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(GP.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(GP.regions).to.be.array();
			expect(GP.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = GP;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
