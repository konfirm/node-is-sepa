/* global source, describe, it, each, expect */

const IM = source('ValueObject/IM');
const { match, IM: RegionIM } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('IM (Isle of Man)', () => {
		describe('package', () => {
			it('IM is not exported', (next) => {
				expect(RegionIM).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				IM
				im
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(IM);
	
				next();
			});
		});

		it('has iso3166 IM', (next) => {
			expect(IM.iso3166).to.equal('IM');

			next();
		});

		it('has iso13616 GB', (next) => {
			expect(IM.iso13616).to.equal('GB');

			next();
		});

		it('has 0 regions', (next) => {
			expect(IM.regions).to.be.array();
			expect(IM.regions).to.have.length(0);

			next();
		});

		it('has since 2016-05-01', (next) => {
			const { since } = IM;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2016-05-01');

			next();
		});
	});
});
