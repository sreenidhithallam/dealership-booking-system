const dbOperations = require('../db-operations/operations');
const { dateRangeOverlaps } = require('./date-utils');

/* The below function checks whether the given booking datetime is overlaping with the existing bookings 
   and check for the dealer's availability based on bookingCapacity */

function isCapacityExceeded(bookingStartDateTime) {
    const bookings = dbOperations.getBookings();
    const overLappingBookings = bookings.filter((booking) =>
        dateRangeOverlaps(bookingStartDateTime, booking.bookingDateTime),
    );
    const { bookingCapacity } = dbOperations.getCapacity();
    const overLappingBookingsCount = overLappingBookings.length;

    if (overLappingBookingsCount >= bookingCapacity) {
        return true;
    }
    return false;
}

module.exports = {
    isCapacityExceeded,
};