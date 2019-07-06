/* global source, describe, it, each, expect */

const CZ = source('ValueObject/CZ');
const { match, CZ: RegionCZ } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('CZ (Czech Republic)', () => {
		describe('package', () => {
			it('CZ is exported', (next) => {
				expect(RegionCZ).to.equal(CZ);
	
				next();
			});
	
			each`
				input
				------
				CZ
				cz
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(CZ);
	
				next();
			});
		});

		it('has iso3166 CZ', (next) => {
			expect(CZ.iso3166).to.equal('CZ');

			next();
		});

		it('has iso13616 CZ', (next) => {
			expect(CZ.iso13616).to.equal('CZ');

			next();
		});

		it('has 0 regions', (next) => {
			expect(CZ.regions).to.be.array();
			expect(CZ.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = CZ;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
