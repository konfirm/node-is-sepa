/* global source, describe, it, each, expect */

const MC = source('ValueObject/MC');
const { match, MC: RegionMC } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('MC (Monaco)', () => {
		describe('package', () => {
			it('MC is exported', (next) => {
				expect(RegionMC).to.equal(MC);
	
				next();
			});
	
			each`
				input
				------
				MC
				mc
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(MC);
	
				next();
			});
		});

		it('has iso3166 MC', (next) => {
			expect(MC.iso3166).to.equal('MC');

			next();
		});

		it('has iso13616 MC', (next) => {
			expect(MC.iso13616).to.equal('MC');

			next();
		});

		it('has 0 regions', (next) => {
			expect(MC.regions).to.be.array();
			expect(MC.regions).to.have.length(0);

			next();
		});

		it('has since 2009-03-01', (next) => {
			const { since } = MC;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2009-03-01');

			next();
		});
	});
});
