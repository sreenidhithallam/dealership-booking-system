const assert = require('assert');

const { dateRangeOverlaps } = require('../../../lib/helper/date-utils');

describe('test dateRangeOverlaps function', function () {
    it('when given two date ranges overlap', function () {
        assert.equal(
            dateRangeOverlaps('2021-09-28T08:30:00.000Z', '2021-09-28T07:30:00.000Z'),
            true,
        );
    });
    it('when given two date ranges do not overlap', function () {
        assert.equal(
            dateRangeOverlaps('2021-09-28T08:30:00.000Z', '2021-09-28T11:30:00.000Z'),
            false,
        );
    });
    it('when given two date ranges are equal and overlap', function () {
        assert.equal(
            dateRangeOverlaps('2021-09-28T08:30:00.000Z', '2021-09-28T08:30:00.000Z'),
            true,
        );
    });
    it('when given two date ranges are adjacent and do not overlap', function () {
        assert.equal(
            dateRangeOverlaps('2021-09-28T08:30:00.000Z', '2021-09-28T10:30:00.000Z'),
            false,
        );
    });
});

