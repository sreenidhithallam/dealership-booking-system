module.exports.errors = {
    INVALID_BOOKING_CAPACITY: {
        code: 'INVALID_BOOKING_CAPACITY',
        message: 'Please provide a positive number for the booking capacity',
    },
    MISSING_CUSTOMER_NAME: {
        code: 'MISSING_CUSTOMER_NAME',
        message: 'Please provide customer name',
    },
    MISSING_CUSTOMER_EMAIL_ID: {
        code: 'MISSING_CUSTOMER_EMAIL',
        message: 'Please provide customer email id',
    },
    INVALID_CUSTOMER_EMAIL_ID: {
        code: 'INVALID_CUSTOMER_EMAIL_ID',
        message: 'Please provide valid customer email id',
    },
    MISSING_CUSTOMER_PHONE_NUMBER: {
        code: 'MISSING_CUSTOMER_PHONE_NUMBER',
        message: 'Please provide customer phone number',
    },
    MISSING_VEHICLE_MAKE: {
        code: 'MISSING_VEHICLE_MAKE',
        message: 'Please provide vehicle make',
    },
    MISSING_VEHICLE_MODEL: {
        code: 'MISSING_VEHICLE_MODEL',
        message: 'Please provide vehicle model',
    },
    MISSING_VEHICLE_VIN: {
        code: 'MISSING_VEHICLE_VIN',
        message: 'Please provide vehicle VIN',
    },
    INVALID_VEHICLE_VIN: {
        code: 'INVALID_VEHICLE_VIN',
        message: 'Please provide valid vehicle VIN of length 17',
    },
    MISSING_BOOKING_DATE_TIME: {
        code: 'MISSING_BOOKING_DATE_TIME',
        message: 'Please provide booking datetime',
    },
    INVALID_BOOKING_DATE_TIME: {
        code: 'INVALID_BOOKING_DATE_TIME',
        message: 'Please provide valid ISO string in UTC time standard',
    },
    OUTSIDE_WORKING_HOURS: {
        code: 'OUTSIDE_WORKING_HOURS',
        message: 'Please provide booking datetime within working hours',
    },
    EXCEEDS_CAPACITY: {
        code: 'EXCEEDS_CAPACITY',
        message: 'Please provide different booking datetime within capacity',
    },
};
