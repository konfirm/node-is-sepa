/* global source, describe, it, each, expect */

const JE = source('ValueObject/JE');
const { match, JE: RegionJE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('JE (Jersey)', () => {
		describe('package', () => {
			it('JE is not exported', (next) => {
				expect(RegionJE).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				JE
				je
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(JE);
	
				next();
			});
		});

		it('has iso3166 JE', (next) => {
			expect(JE.iso3166).to.equal('JE');

			next();
		});

		it('has iso13616 GB', (next) => {
			expect(JE.iso13616).to.equal('GB');

			next();
		});

		it('has 0 regions', (next) => {
			expect(JE.regions).to.be.array();
			expect(JE.regions).to.have.length(0);

			next();
		});

		it('has since 2016-05-01', (next) => {
			const { since } = JE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2016-05-01');

			next();
		});
	});
});
