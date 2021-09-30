const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { createBooking, retrieveBookings } = require('../../../../lib/controller/booking/booking');
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
let req = {};
const bookingsData = [
    {
        customer: {
            name: 'foo',
            phoneNumber: 12324545311,
            email: 'foo@gmail.com',
        },
        vehicle: {
            make: 'Volvo',
            model: 'XC40',
            VIN: '12345678901234561',
        },
        bookingDateTime: '2020-09-28T09:18:36.691Z',
    },
    {
        customer: {
            name: 'bar',
            phoneNumber: 15624545311,
            email: 'bar@gmail.com',
        },
        vehicle: {
            make: 'Volvo',
            model: 'XC40',
            VIN: '12345678901234562',
        },
        bookingDateTime: '2020-09-28T09:18:36.691Z',
    },
    {
        customer: {
            name: 'foo',
            phoneNumber: 12324545311,
            email: 'foo@gmail.com',
        },
        vehicle: {
            make: 'Volvo',
            model: 'XC40',
            VIN: '12345678901234561',
        },
        bookingDateTime: '2021-09-28T09:18:36.691Z',
    },
    {
        customer: {
            name: 'bar',
            phoneNumber: 15624545311,
            email: 'bar@gmail.com',
        },
        vehicle: {
            make: 'Volvo',
            model: 'XC40',
            VIN: '12345678901234562',
        },
        bookingDateTime: '2021-09-28T09:18:36.691Z',
    },
];

describe('test createBooking function', function () {
    beforeEach('mock db requests', function () {
        req = {
            body: {
                customer: {
                    name: 'testuser',
                    phoneNumber: 761234567,
                    email: 'testuser@gmail.com',
                },
                vehicle: {
                    make: 'Volvo',
                    model: 'XC40',
                    VIN: '12345678901234561',
                },
                bookingDateTime: '2020-09-28T09:18:36.691Z',
            },
        };
        sinon.stub(dbOperations, 'addBooking').returns({});
        sinon.stub(dbOperations, 'getCapacity').returns({
            bookingCapacity: 2,
        });
        sinon.stub(dbOperations, 'getBookings').returns([]);
    });

    afterEach('restore db requests', function () {
        dbOperations.addBooking.restore();
        dbOperations.getCapacity.restore();
        dbOperations.getBookings.restore();
    });

    it('should add the booking when valid booking request is provided', function () {
        const response = createBooking(req, res);

        expect(response).to.deep.equal('Successfully created the booking');
    });
    it('should throw error when one of the required fields is provided in the booking request', function () {
        req.body.customer.name = null;
        const response = createBooking(req, res);

        expect(response).to.deep.equal([errors.MISSING_CUSTOMER_NAME]);
    });
    it('should throw error when booking request has booking datetime outside the dealer working window', function () {
        req.body.bookingDateTime = '2020-09-28T18:20:36.691Z';

        const response = createBooking(req, res);

        expect(response).to.deep.equal(errors.OUTSIDE_WORKING_HOURS);
    });
    it('should throw error when capacity exceeded for the requested booking datetime', function () {
        dbOperations.getCapacity.restore();
        dbOperations.getBookings.restore();

        sinon.stub(dbOperations, 'getCapacity').returns({
            bookingCapacity: 1,
        });
        sinon.stub(dbOperations, 'getBookings').returns(bookingsData);

        const response = createBooking(req, res);

        expect(response).to.deep.equal(errors.EXCEEDS_CAPACITY);
    });
});

describe('test retrieveBookings function', function () {
    it('should retrieve all the bookings when query params are not provided', function () {
        sinon.stub(dbOperations, 'getBookings').returns(bookingsData);
        const response = retrieveBookings(req, res);

        expect(response).to.deep.equal({ bookings: bookingsData });
        dbOperations.getBookings.restore();
    });
    it('should retrieve the bookings when query param VIN is provided', function () {
        req.query = {
            VIN: '12345678901234562',
        };

        sinon
            .stub(dbOperations, 'getBookingsBasedOnVIN')
            .returns([bookingsData[1], bookingsData[3]]);

        const response = retrieveBookings(req, res);

        expect(response).to.deep.equal({ bookings: [bookingsData[1], bookingsData[3]] });
        dbOperations.getBookingsBasedOnVIN.restore();
    });
    it('should retrieve the bookings when query param booking datetime is provided', function () {
        req.query = {
            bookingDateTime: '2021-09-28T09:18:36.691Z',
        };

        sinon
            .stub(dbOperations, 'getBookingsBasedOnDate')
            .returns([bookingsData[2], bookingsData[3]]);

        const response = retrieveBookings(req, res);

        expect(response).to.deep.equal({ bookings: [bookingsData[2], bookingsData[3]] });
        dbOperations.getBookingsBasedOnDate.restore();
    });
});
