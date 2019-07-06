/* global source, describe, it, each, expect */

const NL = source('ValueObject/NL');
const { match, NL: RegionNL } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('NL (Netherlands)', () => {
		describe('package', () => {
			it('NL is exported', (next) => {
				expect(RegionNL).to.equal(NL);
	
				next();
			});
	
			each`
				input
				------
				NL
				nl
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(NL);
	
				next();
			});
		});

		it('has iso3166 NL', (next) => {
			expect(NL.iso3166).to.equal('NL');

			next();
		});

		it('has iso13616 NL', (next) => {
			expect(NL.iso13616).to.equal('NL');

			next();
		});

		it('has 0 regions', (next) => {
			expect(NL.regions).to.be.array();
			expect(NL.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = NL;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
