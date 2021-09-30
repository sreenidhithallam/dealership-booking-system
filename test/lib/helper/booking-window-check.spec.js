const assert = require('assert');

const { isBookingInsideWorkingWindow } = require('../../../lib/helper/booking-window-check');

describe('test isBookingInsideWorkingWindow function', function () {
    it('when booking time is within the working window', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-09-30T10:45:47.344Z'), true);
    });
    it('when booking time is outside the working window', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-09-28T16:17:37.204Z'), false);
    });
    it('when booking time is exactly equal to the start of working window', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-09-28T07:00:00.000Z'), true);
    });
    it('when booking time is exactly equal to the close of the working window', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-09-28T14:30:00.000Z'), false);
    });
    it('when booking time is exactly two hours before to the close of the working window', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-09-28T09:30:00.000Z'), true);
    });
    it('when booking day is saturday', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-10-02T09:30:00.000Z'), false);
    });
    it('when booking day is sunday', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-10-03T09:30:00.000Z'), false);
    });
    it('when booking day is monday', function () {
        assert.equal(isBookingInsideWorkingWindow('2021-10-04T09:30:00.000Z'), true);
    });
});