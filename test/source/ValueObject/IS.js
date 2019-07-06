/* global source, describe, it, each, expect */

const IS = source('ValueObject/IS');
const { match, IS: RegionIS } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('IS (Iceland)', () => {
		describe('package', () => {
			it('IS is exported', (next) => {
				expect(RegionIS).to.equal(IS);
	
				next();
			});
	
			each`
				input
				------
				IS
				is
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(IS);
	
				next();
			});
		});

		it('has iso3166 IS', (next) => {
			expect(IS.iso3166).to.equal('IS');

			next();
		});

		it('has iso13616 IS', (next) => {
			expect(IS.iso13616).to.equal('IS');

			next();
		});

		it('has 0 regions', (next) => {
			expect(IS.regions).to.be.array();
			expect(IS.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = IS;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
