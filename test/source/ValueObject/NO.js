/* global source, describe, it, each, expect */

const NO = source('ValueObject/NO');
const { match, NO: RegionNO } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('NO (Norway)', () => {
		describe('package', () => {
			it('NO is exported', (next) => {
				expect(RegionNO).to.equal(NO);
	
				next();
			});
	
			each`
				input
				------
				NO
				no
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(NO);
	
				next();
			});
		});

		it('has iso3166 NO', (next) => {
			expect(NO.iso3166).to.equal('NO');

			next();
		});

		it('has iso13616 NO', (next) => {
			expect(NO.iso13616).to.equal('NO');

			next();
		});

		it('has 0 regions', (next) => {
			expect(NO.regions).to.be.array();
			expect(NO.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = NO;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
