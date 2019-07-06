/* global source, describe, it, each, expect */

const BE = source('ValueObject/BE');
const { match, BE: RegionBE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('BE (Belgium)', () => {
		describe('package', () => {
			it('BE is exported', (next) => {
				expect(RegionBE).to.equal(BE);
	
				next();
			});
	
			each`
				input
				------
				BE
				be
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(BE);
	
				next();
			});
		});

		it('has iso3166 BE', (next) => {
			expect(BE.iso3166).to.equal('BE');

			next();
		});

		it('has iso13616 BE', (next) => {
			expect(BE.iso13616).to.equal('BE');

			next();
		});

		it('has 0 regions', (next) => {
			expect(BE.regions).to.be.array();
			expect(BE.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = BE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
