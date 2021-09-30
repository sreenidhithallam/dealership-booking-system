const { errors } = require('../../errors/errors');
const dbOperations = require('../../db-operations/operations');

/* The below function returns booking capacity of the dealer */

function getBookingCapacityHelper() {
    return dbOperations.getCapacity();
}

/* The below function sets the booking capacity of the dealer */

function setBookingCapacityHelper(body) {
    const { bookingCapacity } = body;

    if (bookingCapacity > 0 && Number.isInteger(bookingCapacity)) {
        dbOperations.setCapacity(bookingCapacity);

        return { bookingCapacity };
    }
    throw errors.INVALID_BOOKING_CAPACITY;
}

module.exports = {
    getBookingCapacityHelper,
    setBookingCapacityHelper,
};