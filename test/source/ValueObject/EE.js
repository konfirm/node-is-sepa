/* global source, describe, it, each, expect */

const EE = source('ValueObject/EE');
const { match, EE: RegionEE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('EE (Estonia)', () => {
		describe('package', () => {
			it('EE is exported', (next) => {
				expect(RegionEE).to.equal(EE);
	
				next();
			});
	
			each`
				input
				------
				EE
				ee
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(EE);
	
				next();
			});
		});

		it('has iso3166 EE', (next) => {
			expect(EE.iso3166).to.equal('EE');

			next();
		});

		it('has iso13616 EE', (next) => {
			expect(EE.iso13616).to.equal('EE');

			next();
		});

		it('has 0 regions', (next) => {
			expect(EE.regions).to.be.array();
			expect(EE.regions).to.have.length(0);

			next();
		});

		it('has since 2011-01-01', (next) => {
			const { since } = EE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2011-01-01');

			next();
		});
	});
});
