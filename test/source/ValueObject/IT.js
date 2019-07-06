/* global source, describe, it, each, expect */

const IT = source('ValueObject/IT');
const { match, IT: RegionIT } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('IT (Italy)', () => {
		describe('package', () => {
			it('IT is exported', (next) => {
				expect(RegionIT).to.equal(IT);
	
				next();
			});
	
			each`
				input
				------
				IT
				it
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(IT);
	
				next();
			});
		});

		it('has iso3166 IT', (next) => {
			expect(IT.iso3166).to.equal('IT');

			next();
		});

		it('has iso13616 IT', (next) => {
			expect(IT.iso13616).to.equal('IT');

			next();
		});

		it('has 0 regions', (next) => {
			expect(IT.regions).to.be.array();
			expect(IT.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = IT;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
