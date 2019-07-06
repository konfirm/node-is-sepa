/* global source, describe, it, each, expect */

const LI = source('ValueObject/LI');
const { match, LI: RegionLI } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('LI (Liechtenstein)', () => {
		describe('package', () => {
			it('LI is exported', (next) => {
				expect(RegionLI).to.equal(LI);
	
				next();
			});
	
			each`
				input
				------
				LI
				li
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(LI);
	
				next();
			});
		});

		it('has iso3166 LI', (next) => {
			expect(LI.iso3166).to.equal('LI');

			next();
		});

		it('has iso13616 LI', (next) => {
			expect(LI.iso13616).to.equal('LI');

			next();
		});

		it('has 0 regions', (next) => {
			expect(LI.regions).to.be.array();
			expect(LI.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = LI;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
