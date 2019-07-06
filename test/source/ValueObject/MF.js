/* global source, describe, it, each, expect */

const MF = source('ValueObject/MF');
const { match, MF: RegionMF } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('MF (Saint Martin (French part))', () => {
		describe('package', () => {
			it('MF is not exported', (next) => {
				expect(RegionMF).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				MF
				mf
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(MF);
	
				next();
			});
		});

		it('has iso3166 MF', (next) => {
			expect(MF.iso3166).to.equal('MF');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(MF.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(MF.regions).to.be.array();
			expect(MF.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = MF;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
