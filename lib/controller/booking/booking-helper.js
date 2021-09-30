const { errors } = require('../../errors/errors');
const { isBookingInsideWorkingWindow } = require('../../helper/booking-window-check');
const { isCapacityExceeded } = require('../../helper/capacity-check');
const { isValidDate, validateInput } = require('../../helper/validations');
const dbOperations = require('../../db-operations/operations');

/* The below function first checks the below conditions
    1. validates the inputs 
    2. checks whether the booking datetime is within working hours
    3. whether the booking datetime is within the dealer's capacity 
    if all the above conditions satisfies the booking will be created successfully else it will throw errors
 */

function createBookingHelper(body) {
    const { bookingDateTime } = body;
    const { errorInfo, isError } = validateInput(body);

    if (!isError) {
        if (isBookingInsideWorkingWindow(bookingDateTime)) {
            if (!isCapacityExceeded(bookingDateTime)) {
                dbOperations.addBooking(body);
                return body;
            }
            throw errors.EXCEEDS_CAPACITY;
        }
        throw errors.OUTSIDE_WORKING_HOURS;
    }
    throw errorInfo;
}

/* The below function returns bookings based of VIN or date if provided. else it will all bookings */

function retrieveBookingsHelper(query = {}) {
    const { bookingDateTime, VIN } = query;

    let bookings = [];

    if (VIN) {
        bookings = dbOperations.getBookingsBasedOnVIN(VIN);
    } else if (bookingDateTime && isValidDate(bookingDateTime)) {
        let date = bookingDateTime.substring(0, 9);
        bookings = dbOperations.getBookingsBasedOnDate(date);
    } else {
        bookings = dbOperations.getBookings();
    }

    return bookings;
}

module.exports = {
    createBookingHelper,
    retrieveBookingsHelper,
};