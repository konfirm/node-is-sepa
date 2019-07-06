/* global source, describe, it, each, expect */

const DK = source('ValueObject/DK');
const { match, DK: RegionDK } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('DK (Denmark)', () => {
		describe('package', () => {
			it('DK is exported', (next) => {
				expect(RegionDK).to.equal(DK);
	
				next();
			});
	
			each`
				input
				------
				DK
				dk
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(DK);
	
				next();
			});
		});

		it('has iso3166 DK', (next) => {
			expect(DK.iso3166).to.equal('DK');

			next();
		});

		it('has iso13616 DK', (next) => {
			expect(DK.iso13616).to.equal('DK');

			next();
		});

		it('has 0 regions', (next) => {
			expect(DK.regions).to.be.array();
			expect(DK.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = DK;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
