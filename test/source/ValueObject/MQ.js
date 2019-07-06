/* global source, describe, it, each, expect */

const MQ = source('ValueObject/MQ');
const { match, MQ: RegionMQ } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('MQ (Martinique)', () => {
		describe('package', () => {
			it('MQ is not exported', (next) => {
				expect(RegionMQ).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				MQ
				mq
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(MQ);
	
				next();
			});
		});

		it('has iso3166 MQ', (next) => {
			expect(MQ.iso3166).to.equal('MQ');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(MQ.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(MQ.regions).to.be.array();
			expect(MQ.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = MQ;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
