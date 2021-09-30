const assert = require('assert');
const sinon = require('sinon');

const { isCapacityExceeded } = require('../../../lib/helper/capacity-check');
const dbOperations = require('../../../lib/db-operations/operations');

const mockData = {
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
};

describe('test isCapacityExceeded function', function () {
    beforeEach('mock getBookings and getCapacity requests', function () {
        sinon.stub(dbOperations, 'getBookings').returns([
            {
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
                bookingDateTime: '2020-09-28T11:18:36.691Z',
            },
        ]);
        sinon.stub(dbOperations, 'getCapacity').returns({
            bookingCapacity: 2,
        });
    });

    afterEach('restore getBookings and getCapacity requests', function () {
        dbOperations.getBookings.restore();
        dbOperations.getCapacity.restore();
    });

    it('when booking capacity is not exceeded', function () {
        assert.equal(isCapacityExceeded('2020-09-28T09:18:36.691Z'), false);
    });

    it('when booking capacity is exceeded', function () {
        dbOperations.getBookings.restore();
        sinon.stub(dbOperations, 'getBookings').returns([mockData, mockData]);

        assert.equal(isCapacityExceeded('2020-09-28T09:18:36.691Z'), true);
    });
});
