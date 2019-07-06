/* global source, describe, it, each, expect */

const FI = source('ValueObject/FI');
const { match, FI: RegionFI } = require('../../../source/main.js');
const SubRegionAX = source('ValueObject/AX.js')
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('FI (Finland)', () => {
		describe('package', () => {
			it('FI is exported', (next) => {
				expect(RegionFI).to.equal(FI);
	
				next();
			});
	
			each`
				input
				------
				FI
				fi
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(FI);
	
				next();
			});
		});

		it('has iso3166 FI', (next) => {
			expect(FI.iso3166).to.equal('FI');

			next();
		});

		it('has iso13616 FI', (next) => {
			expect(FI.iso13616).to.equal('FI');

			next();
		});

		it('has 1 regions', (next) => {
			expect(FI.regions).to.be.array();
			expect(FI.regions).to.have.length(1);

			expect(FI.regions).to.contain(SubRegionAX);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = FI;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
