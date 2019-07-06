/* global source, describe, it, each, expect */

const IE = source('ValueObject/IE');
const { match, IE: RegionIE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('IE (Ireland)', () => {
		describe('package', () => {
			it('IE is exported', (next) => {
				expect(RegionIE).to.equal(IE);
	
				next();
			});
	
			each`
				input
				------
				IE
				ie
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(IE);
	
				next();
			});
		});

		it('has iso3166 IE', (next) => {
			expect(IE.iso3166).to.equal('IE');

			next();
		});

		it('has iso13616 IE', (next) => {
			expect(IE.iso13616).to.equal('IE');

			next();
		});

		it('has 0 regions', (next) => {
			expect(IE.regions).to.be.array();
			expect(IE.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = IE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
