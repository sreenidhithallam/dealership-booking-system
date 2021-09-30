const { errors } = require('../errors/errors');

const emailRegex = /\S+@\S+\.\S+/;
const isoStringRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;

/* The below function validates the inputs */

function validateInput(input) {
    const { customer = {}, vehicle = {}, bookingDateTime } = input;
    const { name, phoneNumber, email } = customer;
    const { make, model, VIN } = vehicle;

    let errorInfo = [];

    if (isNullUndefinedOrEmpty(name)) {
        errorInfo.push(errors.MISSING_CUSTOMER_NAME);
    }

    if (isNullUndefinedOrEmpty(phoneNumber)) {
        errorInfo.push(errors.MISSING_CUSTOMER_PHONE_NUMBER);
    }

    if (isNullUndefinedOrEmpty(email)) {
        errorInfo.push(errors.MISSING_CUSTOMER_EMAIL_ID);
    } else if (!emailRegex.test(email)) {
        errorInfo.push(errors.INVALID_CUSTOMER_EMAIL_ID);
    }

    if (isNullUndefinedOrEmpty(make)) {
        errorInfo.push(errors.MISSING_VEHICLE_MAKE);
    }

    if (isNullUndefinedOrEmpty(model)) {
        errorInfo.push(errors.MISSING_VEHICLE_MODEL);
    }

    if (isNullUndefinedOrEmpty(VIN)) {
        errorInfo.push(errors.MISSING_VEHICLE_VIN);
    } else if (VIN.length !== 17) {
        errorInfo.push(errors.INVALID_VEHICLE_VIN);
    }

    if (isNullUndefinedOrEmpty(bookingDateTime)) {
        errorInfo.push(errors.MISSING_BOOKING_DATE_TIME);
    } else if (!isValidDate(bookingDateTime)) {
        errorInfo.push(errors.INVALID_BOOKING_DATE_TIME);
    }

    if (errorInfo.length) {
        return {
            isError: true,
            errorInfo: errorInfo,
        };
    }
    return {
        isError: false,
    };
}

/* The below function checks whether input value is null or undefined or empty string */

function isNullUndefinedOrEmpty(value) {
    return value == null || value === '';
}

/* The below function checks whether input date is ISO String */

function isValidDate(date) {
    return (
        isoStringRegex.test(date) &&
        Object.prototype.toString.call(new Date(date)) === '[object Date]'
    );
}

module.exports = {
    validateInput,
    isValidDate,
};
