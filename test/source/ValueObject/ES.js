/* global source, describe, it, each, expect */

const ES = source('ValueObject/ES');
const { match, ES: RegionES } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('ES (Canary Islands)', () => {
		describe('package', () => {
			it('ES is exported', (next) => {
				expect(RegionES).to.equal(ES);
	
				next();
			});
	
			each`
				input
				------
				ES
				es
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(ES);
	
				next();
			});
		});

		it('has iso3166 ES', (next) => {
			expect(ES.iso3166).to.equal('ES');

			next();
		});

		it('has iso13616 ES', (next) => {
			expect(ES.iso13616).to.equal('ES');

			next();
		});

		it('has 0 regions', (next) => {
			expect(ES.regions).to.be.array();
			expect(ES.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = ES;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
