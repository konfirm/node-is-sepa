/* global source, describe, it, each, expect */

const AX = source('ValueObject/AX');
const { match, AX: RegionAX } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('AX (Åland Islands)', () => {
		describe('package', () => {
			it('AX is not exported', (next) => {
				expect(RegionAX).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				AX
				ax
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(AX);
	
				next();
			});
		});

		it('has iso3166 AX', (next) => {
			expect(AX.iso3166).to.equal('AX');

			next();
		});

		it('has iso13616 FI', (next) => {
			expect(AX.iso13616).to.equal('FI');

			next();
		});

		it('has 0 regions', (next) => {
			expect(AX.regions).to.be.array();
			expect(AX.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = AX;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
