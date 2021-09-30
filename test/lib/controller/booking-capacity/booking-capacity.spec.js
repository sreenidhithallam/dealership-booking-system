const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const {
    getBookingCapacity,
    setBookingCapacity,
} = require('../../../../lib/controller/booking-capacity/booking-capacity');
const dbOperations = require('../../../../lib/db-operations/operations');
const { errors } = require('../../../../lib/errors/errors');

const res = {
    send(data) {
        return data;
    },
    status() {
        return this;
    },
};
let req = {
    body: {},
};

describe('test getBookingCapacity function', function () {
    beforeEach('mock getCapacity db request', function () {
        sinon.stub(dbOperations, 'getCapacity').returns({
            bookingCapacity: 5,
        });
    });

    afterEach('restore getCapacity db request', function () {
        dbOperations.getCapacity.restore();
    });

    it('should return the booking capacity', function () {
        const response = getBookingCapacity(req, res);

        expect(response).to.deep.equal({
            bookingCapacity: 5,
        });
    });
});

describe('test setBookingCapacity function', function () {
    beforeEach('mock setCapacity request', function () {
        sinon.stub(dbOperations, 'setCapacity').returns({
            bookingCapacity: 4,
        });
    });

    afterEach('restore setCapacity request', function () {
        dbOperations.setCapacity.restore();
    });

    it('should set the booking capacity when valid value is provided for booking capacity', function () {
        req.body.bookingCapacity = 4;

        const response = setBookingCapacity(req, res);

        expect(response).to.equal('The booking capacity is updated to 4');
    });
    it('should throw error when negative value is provided for booking capacity', function () {
        req.body.bookingCapacity = -1;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when zero is provided for booking capacity', function () {
        req.body.bookingCapacity = 0;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when floating value is provided for booking capacity', function () {
        req.body.bookingCapacity = 0.5454;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when null is provided for booking capacity', function () {
        req.body.bookingCapacity = null;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when undefined is provided for booking capacity', function () {
        req.body.bookingCapacity = undefined;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when string is provided for booking capacity', function () {
        req.body.bookingCapacity = 'foo';

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when infinity is provided for booking capacity', function () {
        req.body.bookingCapacity = Infinity;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
    it('should throw error when negative infinity is provided for booking capacity', function () {
        req.body.bookingCapacity = -Infinity;

        const response = setBookingCapacity(req, res);

        expect(response).to.deep.equal(errors.INVALID_BOOKING_CAPACITY);
    });
});
