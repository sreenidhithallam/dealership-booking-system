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

/* The below function returns bookings based on VIN or date. 
    1. If date/VIN is not provided as input then it will return all bookings 
    2. Throws error incase of invalid date or VIN  */

function retrieveBookingsHelper(query = {}) {
    const { bookingDateTime, VIN } = query;

    let bookings = [];

    if (VIN) {
        if( VIN.length === 17) {
            bookings = dbOperations.getBookingsBasedOnVIN(VIN);
        } else {
            throw errors.INVALID_VEHICLE_VIN;
        }    
    } else if (bookingDateTime) {
        if(isValidDate(bookingDateTime)) {
            let date = bookingDateTime.substring(0, 10);
            bookings = dbOperations.getBookingsBasedOnDate(date);
        } else {
            throw errors.INVALID_BOOKING_DATE_TIME;
        }        
    } else {
        bookings = dbOperations.getBookings();
    }

    return bookings;
}

module.exports = {
    createBookingHelper,
    retrieveBookingsHelper,
};
