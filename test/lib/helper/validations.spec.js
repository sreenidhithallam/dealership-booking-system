const assert = require('assert');

const { errors } = require('../../../lib/errors/errors');
const { validateInput } = require('../../../lib/helper/validations');

describe('test validateInput function', function () {
    it('when invalid input is provided to validateInput', function () {
        assert.deepEqual(validateInput({}), {
            errorInfo: [
                errors.MISSING_CUSTOMER_NAME,
                errors.MISSING_CUSTOMER_PHONE_NUMBER,
                errors.MISSING_CUSTOMER_EMAIL_ID,
                errors.MISSING_VEHICLE_MAKE,
                errors.MISSING_VEHICLE_MODEL,
                errors.MISSING_VEHICLE_VIN,
                errors.MISSING_BOOKING_DATE_TIME,
            ],
            isError: true,
        });
    });
    it('when valid input is provided to validateInput', function () {
        assert.deepEqual(
            validateInput({
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
            }),
            {
                isError: false,
            },
        );
    });
    it('when invalid email is provided', function () {
        assert.deepEqual(
            validateInput({
                customer: {
                    name: 'testuser',
                    phoneNumber: 761234567,
                    email: 'qqqqqq',
                },
                vehicle: {
                    make: 'Volvo',
                    model: 'XC40',
                    VIN: '12345678901234561',
                },
                bookingDateTime: '2020-09-28T09:18:36.691Z',
            }),
            {
                isError: true,
                errorInfo: [errors.INVALID_CUSTOMER_EMAIL_ID],
            },
        );
    });
    it('when VIN is not of length 17', function () {
        assert.deepEqual(
            validateInput({
                customer: {
                    name: 'testuser',
                    phoneNumber: 761234567,
                    email: 'testuser@gmail.com',
                },
                vehicle: {
                    make: 'Volvo',
                    model: 'XC40',
                    VIN: '1234567890123456',
                },
                bookingDateTime: '2020-09-28T09:18:36.691Z',
            }),
            {
                errorInfo: [errors.INVALID_VEHICLE_VIN],
                isError: true,
            },
        );
    });
    it('when invalid booking datetime is provided', function () {
        assert.deepEqual(
            validateInput({
                customer: {
                    name: 'testuser',
                    phoneNumber: 761234567,
                    email: 'testuser@gmail.com',
                },
                vehicle: {
                    make: 'Volvo',
                    model: 'XC40',
                    VIN: '12345678901234565',
                },
                bookingDateTime: '2020-09-28T:18:36.691Z',
            }),
            {
                errorInfo: [errors.INVALID_BOOKING_DATE_TIME],
                isError: true,
            },
        );
    });
});
